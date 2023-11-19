import { ContentTop } from "../ContentTop/index";
import { ContentMiddle } from "../ContentMiddle/index";
import { MyChart } from "../MyChart/index";
import { ContentBottom } from "../ContentBottom/index";
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
