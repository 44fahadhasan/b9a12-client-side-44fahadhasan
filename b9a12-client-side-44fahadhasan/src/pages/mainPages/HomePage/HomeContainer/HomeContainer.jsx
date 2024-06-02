import PricePlans from "../PricePlans/PricePlans";
import UsersStatistics from "../UsersStatistics/UsersStatistics";

const HomeContainer = () => {
  return (
    <div className="bg-[#E6E7E8]">
      <UsersStatistics />
      <PricePlans />
    </div>
  );
};

export default HomeContainer;
