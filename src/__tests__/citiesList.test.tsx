import { render, screen } from "@testing-library/react";
import CitiesList from "@pages/citiesList";
import { renderWithProviders } from "@helpers/test-store-utils";
import { citiesList } from './fixtures/citiesList.fixture';
import themingWrapper from "@helpers/themingHelper";

describe("CitiesList", () => {
  it("should render CitiesList page", () => {
    const { container } = renderWithProviders(themingWrapper(<CitiesList />));

    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should renders CitiesList page heading and empty state message", async () => {
    const { container } = renderWithProviders(themingWrapper(<CitiesList />));
    const heading = screen.getByRole("heading", {
      name: /Favourite Cities List/i,
    });

    const expectedMessage = 'Do not have added cities.';

    const renderedMessage = await screen.findAllByText(expectedMessage).then(([res]) => {
      return res.innerHTML;
    })

    expect(expectedMessage).toEqual(renderedMessage);
    expect(heading).toBeInTheDocument();
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("should render feature of FavouriteCitiesList", async () => {
    const { container } = renderWithProviders(themingWrapper(<CitiesList />), {
      preloadedState: {
        citiesList
      }
    });
    const listItemResult = await screen.findAllByRole("listitem");
    listItemResult.forEach((itemList, index) => {

      expect(itemList.innerHTML).toContain(Object.entries(citiesList.cities)[index][1].name);
    })
    expect(container.innerHTML).toMatchSnapshot();
  });
});
