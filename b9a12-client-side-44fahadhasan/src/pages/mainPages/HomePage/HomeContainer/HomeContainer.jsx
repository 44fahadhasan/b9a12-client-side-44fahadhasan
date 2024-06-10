import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import CustomersFeedback from "../CustomersFeedback/CustomersFeedback";
import DontMiss from "../DontMiss/DontMiss";
import PopularBlog from "../PopularBlog/PopularBlog";
import PricePlans from "../PricePlans/PricePlans";
import Publisher from "../Publisher/Publisher";
import SubscriptionModal from "../SubscriptionModal/SubscriptionModal";
import TrendingArticles from "../TrendingArticles/TrendingArticles";
import UsersStatistics from "../UsersStatistics/UsersStatistics";

const HomeContainer = () => {
  let [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    // clear timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#E6E7E8]">
      <SubscriptionModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
