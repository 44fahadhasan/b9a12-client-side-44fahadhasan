import { useQuery } from "@tanstack/react-query";
import { Chart } from "react-google-charts";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import StaticChartOne from "../../../components/Dashboard/StaticChartOne/StaticChartOne";
import StaticChartTwo from "../../../components/Dashboard/StaticChartTwo/StaticChartTwo";
import LoadingSpiinner from "../../../components/LoadingSpiinner/LoadingSpiinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const DashboardPage = () => {
  const axiosSecure = useAxiosSecure();

  const { data: publisherObj = {}, isLoading } = useQuery({
    queryKey: ["publishers-statistics"],
    queryFn: async () => {
      const res = await axiosSecure.get("/publishers-statistics");
      return res?.data;
    },
  });

  // fetch data convert obj to array
  const publisherArray = Object.entries(publisherObj);

  // total published article count number
  const totalPublishedArticleCountNumber = publisherArray.reduce(
    (preValue, currArray) => preValue + currArray[1],
    0
  );

  // publisher array count number convert to percentage
  const pieChartData = publisherArray.map((value) => {
    return [value[0], (value[1] / totalPublishedArticleCountNumber) * 100];
  });

  // add title of pie chart in array
  pieChartData.unshift(["PublisherName", "CountNumber"]);

  if (isLoading) return <LoadingSpiinner />;

  return (
    <div>
      <ContainerBox>
        {/* dynamic pie chart */}
        <Chart
          chartType="PieChart"
          data={pieChartData}
          options={{ title: "The Percentage of Publication Articles" }}
          width={"100%"}
          height={"400px"}
        />

        {/* static pie chart */}
        <StaticChartTwo />
        <StaticChartOne />
      </ContainerBox>
    </div>
  );
};

export default DashboardPage;
