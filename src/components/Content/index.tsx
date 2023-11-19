import { ContentTop } from "../ContentTop";
import { ContentMiddle } from "../ContentMiddle";
import { MyChart } from "../MyChart";
import { ContentBottom } from "../ContentBottom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinVolume } from "../../axios/fetch";
import { AxiosResponse } from "axios";

export const Content = () => {
  const { data } = useQuery<AxiosResponse<any, any> | undefined>({
    queryKey: ["coinVolume"],
    queryFn: fetchCoinVolume,
  });

  return (
    <>
      <ContentTop />
      <ContentMiddle />
      <MyChart dataVolume={data} />
      <ContentBottom />
    </>
  );
};
