import { AxisOptions, Chart } from "react-charts";
import { useMemo } from "react";

type MyDatum = { date: Date; stars: number };

export const MyChart = ({ dataVolume }) => {
  const dataForChart = dataVolume?.data.Data;
  const data = useMemo(
    (): any => [
      {
        label: "Series 1",
        data: dataForChart?.map((item) => ({
          date: new Date(item.time * 1000),
          stars: item.volumetotal,
        })),
      },
    ],
    [dataForChart]
  );

  const primaryAxis = useMemo(
    (): AxisOptions<MyDatum> => ({
      getValue: (datum) => datum.date,
    }),
    []
  );

  const secondaryAxes = useMemo(
    (): AxisOptions<MyDatum>[] => [
      {
        getValue: (datum) => datum.stars,
      },
    ],
    []
  );
  return (
    dataVolume && (
      <div className={"my-chart"}>
        <Chart
          className={"my-chart"}
          options={{
            data,
            primaryAxis,
            secondaryAxes,
          }}
        />
      </div>
    )
  );
};
