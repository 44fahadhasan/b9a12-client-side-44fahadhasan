import SectionContent from "../../../../components/SectionContent/SectionContent";
import PriceCard from "./PriceCard/PriceCard";

const tableOne = [
  { name: "1 Premium account" },
  { name: "Cancel anytime" },
  {
    name: "15 hours/month of listening time from our audiobooks subscriber catalog",
  },
];

const tableTwo = [
  { name: "2 Premium account" },
  { name: "Cancel anytime" },
  {
    name: "15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)",
  },
];

const tableThree = [
  { name: "Up to 6 Premium or Kids accounts" },
  { name: "Block explicit music" },
  { name: "Access to Spotify Kids" },
  { name: "Cancel anytime" },
  {
    name: "15 hours/month of listening time from our audiobooks subscriber catalog (plan manager only)",
  },
];

const PricePlans = () => {
  return (
    <div className="font-[sans-serif] text-[#333] bg-gray-100 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <SectionContent title={"Pricing Plans"} />
        </div>
        <div className="flex mx-auto mt-12 bg-white rounded-full max-w-[100px]">
          <button className="text-white font-semibold w-full text-sm bg-[#333] py-2.5 px-4 rounded-full">
            Monthly
          </button>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-10 max-md:max-w-sm max-md:mx-auto">
          <PriceCard
            badge={"Free For 1 Month"}
            tittle={"Premium Individual"}
            price={"FREE"}
            priceLabel={"FOR 1 MONTH"}
            lists={tableOne}
            bntTxt={"Try free for 1 month"}
            footerTxt={
              "Free for 1 month, then $10.99 per month after. Offer only available if you haven't tried Premium before. Terms apply."
            }
          />
          <PriceCard
            tittle={"Premium Duo"}
            price={"$14.99"}
            priceLabel={"PER MONTH"}
            lists={tableTwo}
            bntTxt={"Get Premium Duo"}
            footerTxt={
              "For couples who reside at the same address. Terms apply."
            }
            border={"true"}
          />
          <PriceCard
            tittle={"Get Premium Family"}
            price={"$16.99"}
            priceLabel={"PER MONTH"}
            lists={tableThree}
            bntTxt={"Get Premium Family"}
            footerTxt={
              "For up to 6 family members residing at the same address. Terms apply."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PricePlans;
