import { useContext } from "react";
import { DataContext } from "../Home";
import { core } from "../../fetch/fetch";

export const ContentBottom = () => {
  const data = useContext(DataContext);
  const dataForImg = data?.data.RAW.OMG.RUB.FROMSYMBOL;
  console.log(data);

  return (
    <div className={"content__bottom--wrapper"}>
      <div className={"content__bottom"}>
        <div className={"content__bottom--title"}>
          PRICE
          <input className={"content__bottom--subtitle"}></input>
        </div>
        <div className={"content__bottom--title"}>
          AMOUNT
          <input className={"content__bottom--subtitle"}></input>
        </div>
        <div>TOTAL</div>
      </div>
    </div>
  );
};
