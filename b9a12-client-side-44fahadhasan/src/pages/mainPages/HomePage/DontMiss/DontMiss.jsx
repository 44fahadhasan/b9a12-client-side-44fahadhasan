import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import LoadingSpiinner from "../../../../components/LoadingSpiinner/LoadingSpiinner";
import SectionContent from "../../../../components/SectionContent/SectionContent";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const DontMiss = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const { data: recentArticles = [], isLoading } = useQuery({
    queryKey: ["recentArticles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/recent-articles");
      return res?.data;
    },
  });

  if (isLoading) return <LoadingSpiinner />;

  return (
    <ContainerBox>
      <div className="py-10">
        {/* <!-- Title --> */}
        <div className="mb-10">
          <SectionContent title={"Recent Articles"} />
        </div>

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Card --> */}
          {recentArticles?.map((recentArticle) => (
            <Link
              to={`/Article-Details/${recentArticle?._id}`}
              key={recentArticle?._id}
              className="group block rounded-xl"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  className="w-full object-cover rounded-xl h-[412px]"
                  src={recentArticle?.image}
                />
              </div>
              <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-[#FB4C35]">
                {recentArticle?.title?.slice(0, 70)}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {new Date(recentArticle?.time).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                })}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            className="text-sm font-medium py-2 px-3 rounded-full bg-[#FB4C35] text-white shadow-sm"
            onClick={() => navigate("/All-Articles")}
          >
            View All
          </button>
        </div>
      </div>
    </ContainerBox>
  );
};

export default DontMiss;
