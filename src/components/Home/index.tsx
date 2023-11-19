import { useQuery } from "@tanstack/react-query";
import { fetchCurrencies } from "../../fetch/fetch";
import { Content } from "../Content";
import { createContext } from "react";
import { Navbar } from "../Navbar";
import { Preloader } from "../Preloader";

export const DataContext = createContext<object>({});

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
