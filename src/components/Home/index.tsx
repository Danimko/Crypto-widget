import { useQuery } from "@tanstack/react-query";
import { fetchCurrencies } from "../../axios/fetch";
import { Content } from "../Content/index";
import { createContext } from "react";
import { Navbar } from "../Navbar/index";
import { Preloader } from "../Preloader/index";
import { AxiosResponse } from "axios";

export const DataContext = createContext<AxiosResponse<any, any> | undefined>(
  undefined
);

export const Home = () => {
  const { data, isFetched } = useQuery({
    queryKey: ["currencies"],
    queryFn: fetchCurrencies,
  });

  return isFetched ? (
    <DataContext.Provider value={data}>
      <div className="wrapper">
        <Navbar />
        <div className="content">
          <div>
            <Content />
          </div>
        </div>
      </div>
    </DataContext.Provider>
  ) : (
    <Preloader />
  );
};
