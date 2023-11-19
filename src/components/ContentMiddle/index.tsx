import { useContext } from "react";
import { DataContext } from "../Home";

export const ContentMiddle = () => {
  const data = useContext(DataContext);
  const dataForContent = data?.data.RAW.OMG.RUB;

  return (
    <div className={"content__middle--wrapper"}>
      <div className={"content__middle"}>
        <div className={"content__middle--title"}>
          Last Trade price
          <div className={"content__middle--subtitle"}>
            {dataForContent.PRICE.toFixed(6)}
          </div>
        </div>
        <div className={"content__middle--title"}>
          24 hour price
          <div
            className={`content__middle--subtitle ${
              dataForContent.CHANGE24HOUR < 0 ? `minus` : `plus`
            }`}
          >
            {dataForContent.CHANGE24HOUR.toFixed(2) + "%"}
          </div>
        </div>
        <div className={"content__middle--title"}>
          24 hour volume
          <div className={"content__middle--subtitle"}>
            {dataForContent.VOLUME24HOUR.toFixed(6)}
          </div>
        </div>
      </div>
    </div>
  );
};
