import { useQuery } from "@tanstack/react-query";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import LoadingSpiinner from "../../../components/LoadingSpiinner/LoadingSpiinner";
import SectionContent from "../../../components/SectionContent/SectionContent";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PremiumArticleCard from "./PremiumArticleCard/PremiumArticleCard";

const PremiumArticles = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: premiumArticles = [], isLoading } = useQuery({
    queryKey: ["premiumArticles"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("/premium-articles", {
        headers: { email: user?.email },
      });
      return res?.data;
    },
  });

  if (isLoading) return <LoadingSpiinner />;
  return (
    <div className="bg-[#E6E7E8] font-[sans-serif]">
      <ContainerBox>
        {/* card area */}
        <div>
          <div className="text-center">
            <SectionContent title={"Showed All Premium Articles"} />
          </div>

          {/* card container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16  mx-auto">
            {/* single card */}
            {premiumArticles?.map((premiumArticle) => (
              <PremiumArticleCard
                key={premiumArticle?._id}
                premiumArticle={premiumArticle}
              />
            ))}
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default PremiumArticles;
