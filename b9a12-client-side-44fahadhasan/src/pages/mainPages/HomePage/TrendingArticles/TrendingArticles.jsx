import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import LoadingSpiinner from "../../../../components/LoadingSpiinner/LoadingSpiinner";
import SectionContent from "../../../../components/SectionContent/SectionContent";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import TrendingArticlesCard from "./TrendingArticlesCard/TrendingArticlesCard";

const TrendingArticles = () => {
  const axiosPublic = useAxiosPublic();

  const { data: trendingArticles = [], isLoading } = useQuery({
    queryKey: ["trendingArticles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/trending-articles");
      return res?.data;
    },
  });

  if (isLoading) return <LoadingSpiinner />;

  return (
    <div>
      <ContainerBox>
        <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
          <SectionContent title={"Trending Articles"} />

          {/* <!-- Slider controls --> */}
          <div className="flex items-center gap-8">
            <button
              id="slider-button-left"
              className="swiper-button-prev group flex justify-center items-center border border-solid border-[#FB4C35] w-12 h-12 transition-all duration-500 rounded-full hover:bg-[#FB4C35] "
            >
              <svg
                className="h-6 w-6 text-[#FB4C35] group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              id="slider-button-right"
              className="swiper-button-next group flex justify-center items-center border border-solid border-[#FB4C35] w-12 h-12 transition-all duration-500 rounded-full hover:bg-[#FB4C35]"
            >
              <svg
                className="h-6 w-6 text-[#FB4C35] group-hover:text-white"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* slider */}
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            type: "fraction",
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {trendingArticles?.map((trendingArticle) => (
            <SwiperSlide key={trendingArticle?._id}>
              <TrendingArticlesCard trendingArticle={trendingArticle} />
            </SwiperSlide>
          ))}
        </Swiper>
      </ContainerBox>
    </div>
  );
};

export default TrendingArticles;
