import { ContentTop } from "../ContentTop";
import { ContentMiddle } from "../ContentMiddle";
import { MyChart } from "../MyChart";
import { ContentBottom } from "../ContentBottom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinVolume } from "../../fetch/fetch";

export const Content = () => {
  const { data } = useQuery({
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
