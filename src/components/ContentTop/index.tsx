import { useContext } from "react";
import { DataContext } from "../Home";

export const ContentTop = () => {
  const data = useContext(DataContext);
  return (
    <div className={"content__top"}>
      <div className={"coin__title"}>
        {data?.data.RAW.OMG.RUB.FROMSYMBOL} - {data?.data.RAW.OMG.RUB.TOSYMBOL}
      </div>
      <div className={"content__top--time"}>
        <div>1d</div>
        <div className={"active"}>6h</div>
        <div>1h</div>
        <div>30m</div>
        <div>5m</div>
      </div>
    </div>
  );
};
