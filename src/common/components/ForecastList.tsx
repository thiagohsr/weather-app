import { ForecastHolder } from "@styles/sharedStyles";
import IconLoaderStyled from "@common/components/WeatherIconLoader";
import Grid from "styled-components-grid";

const ForecastList = (props:any) => {
  const { forecast } = props;

  return (
    <>
      <ForecastHolder style={{ width: "100%" }}>
        <h3>8-day forecast</h3>
        {forecast.daily.map((item: any) => {
          const forecastDay = new Date(item.dt * 1000).toDateString()

          return (
            <div key={item?.dt}>
              <Grid style={{ marginBottom: 15, paddingBottom: 10, borderBottom: '1px solid #a8a8a8' }}>
                <Grid.Unit size={{ mobile: 2.7 / 9, tablet: 3 / 9, desktop: 2.3 / 8}}>
                  { forecastDay.substring(forecastDay.length - 4, 0) }
                </Grid.Unit>
                <Grid.Unit size={{ mobile: 3.3 / 9, tablet: 3 / 9, desktop: 3 / 8 }} style={{ position: "relative", paddingLeft: 30 }}>
                  <IconLoaderStyled src={`/images/${item.weather[0]?.icon}@2x.png`} />{ Math.round(item?.temp.max) }/{ Math.round(item?.temp.min) }°C
                </Grid.Unit>
                <Grid.Unit size={{ mobile: 3 / 9, tablet: 3 / 9, desktop: 2.5 / 8 }}>{
                  item.weather[0]?.description
                }</Grid.Unit>
              </Grid>
            </div>
          )
        })}
      </ForecastHolder>
    </>
  )
}

export default ForecastList;