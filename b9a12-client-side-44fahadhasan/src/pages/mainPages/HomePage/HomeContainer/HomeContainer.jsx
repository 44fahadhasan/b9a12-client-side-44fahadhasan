import PricePlans from "../PricePlans/PricePlans";
import Publisher from "../Publisher/Publisher";
import TrendingArticles from "../TrendingArticles/TrendingArticles";

import UsersStatistics from "../UsersStatistics/UsersStatistics";

const HomeContainer = () => {
  return (
    <div className="bg-[#E6E7E8]">
      <TrendingArticles />
      <Publisher />
      <UsersStatistics />
      <PricePlans />
    </div>
  );
};

export default HomeContainer;
