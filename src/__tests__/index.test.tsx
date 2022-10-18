import { render, screen } from "@testing-library/react";
import Home from "@pages/index";
import { renderWithProviders } from "./utils/test-store-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";

import themingWrapper from "@helpers/themingHelper";

import { currentWeather } from "./fixtures/currentWeather.fixture";
import { queries } from "./fixtures/weatherApiQueries.fixture";
import { act } from "react-dom/test-utils";


// TODO: populate store from these calls.
export const handlers = [
  rest.get(`/weather`, (req, res, ctx) => {
    return res(ctx.json({ status: "pending" }), ctx.delay(350));
  }),
  rest.get(`/reverse`, (req, res, ctx) => {
    return res(
      ctx.json([]), ctx.delay(1500)
    );
  }),
];
const server = setupServer(...handlers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe("Home", () => {
  it("should renders homepage unchanged", () => {
    const { container } = renderWithProviders(themingWrapper(<Home />));

    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should renders a heading", () => {
    const { container } = renderWithProviders(themingWrapper(<Home />));
    const heading = screen.getByRole("heading", {
      name: /Weather app/i,
    });

    expect(heading).toBeInTheDocument();
  });

  it("should renders weatherDisplay feature", async () => {
    const { container, store } = await renderWithProviders(themingWrapper(<Home />), {
      preloadedState: {
        weatherApi: {
          queries: {
            ...queries            
          },
        },
        weather: {
          weather: { ...currentWeather.weather.weather },  
          forecast: currentWeather.forecast,
        },
      },
    });

    await act(() => {
      const forecastElementsList = screen.getByTestId('forecast-list');

      Object.values(forecastElementsList.children).forEach((item, index) => {
        const expectedWeatherDescription = currentWeather.weather.weather.daily[index].weather[0].description;
        expect(item.innerHTML).toContain(expectedWeatherDescription);
      });
      const expectedCityName = screen.getByRole("heading", {
        name: /São Paulo, BR/i,
      });
      const expectedCityTemperature = screen.getByRole("heading", {
        name: /18°C/i,
      });
      const expectedForecastListHeader = screen.getByRole("heading", {
        name: /8-day forecast/i,
      });
      expect(expectedCityName).toBeInTheDocument();
      expect(expectedCityTemperature).toBeInTheDocument();
      expect(expectedForecastListHeader).toBeInTheDocument();
      
      
    });
  });
});
