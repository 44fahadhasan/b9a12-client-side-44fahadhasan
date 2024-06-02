import Blog from "../Blog/Blog";
import CustomersFeedback from "../CustomersFeedback/CustomersFeedback";
import DontMiss from "../DontMiss/DontMiss";
import PopularBlog from "../PopularBlog/PopularBlog";
import PricePlans from "../PricePlans/PricePlans";
import Publisher from "../Publisher/Publisher";
import TrendingArticles from "../TrendingArticles/TrendingArticles";

import UsersStatistics from "../UsersStatistics/UsersStatistics";

const HomeContainer = () => {
  return (
    <div className="bg-[#E6E7E8]">
      <Blog />
      <TrendingArticles />
      <Publisher />
      <PopularBlog />
      <UsersStatistics />
      <PricePlans />
      <DontMiss />
      <CustomersFeedback />
    </div>
  );
};

export default HomeContainer;
