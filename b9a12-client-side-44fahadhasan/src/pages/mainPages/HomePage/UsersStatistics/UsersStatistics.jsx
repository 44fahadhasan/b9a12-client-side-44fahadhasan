import { useQuery } from "@tanstack/react-query";
import CountUp from "react-countup";
import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import SectionContent from "../../../../components/SectionContent/SectionContent";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const UsersStatistics = () => {
  const axiosPublic = useAxiosPublic();

  const { data } = useQuery({
    queryKey: ["userStatistics"],
    queryFn: async () => {
      const res = await axiosPublic.get("/user-statistics");
      return res?.data;
    },
  });

  return (
    <section>
      <ContainerBox>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <SectionContent title={" Our User Statistics"} />
          </div>
        </div>
        <div className="mt-10 pb-1">
          <div className="relative">
            <div className="absolute inset-0 h-1/2x bg-gray-50x"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                  <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      All Users
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      <CountUp end={data?.allUser} duration={3} />+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Normal Users
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      <CountUp end={data?.normalUser} duration={3} />+
                    </dd>
                  </div>
                  <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                      Premium Users
                    </dt>
                    <dd className="order-1 text-5xl font-extrabold text-gray-700">
                      <CountUp end={data?.premiumUser} duration={3} />+
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </ContainerBox>
    </section>
  );
};

export default UsersStatistics;
