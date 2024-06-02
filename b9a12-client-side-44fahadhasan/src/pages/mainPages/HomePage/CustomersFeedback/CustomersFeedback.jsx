import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import FeedbackCard from "./FeedbackCard/FeedbackCard";

const trendingArticles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

const CustomersFeedback = () => {
  return (
    <section className="">
      <ContainerBox>
        <div className="">
          <div className="flex justify-center items-center gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8 max-w-sm sm:max-w-2xl lg:max-w-full mx-auto">
            <div className="w-full lg:w-2/5">
              <span className="text-sm text-gray-500 font-medium mb-4 block">
                Testimonial
              </span>
              <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] mb-8">
                23k+ Customers gave their{" "}
                <span className=" text-transparent bg-clip-text bg-gradient-to-tr from-[#FB4C35] to-[#FB4C35]">
                  Feedback
                </span>
              </h2>
              {/* <!-- Slider controls --> */}
              <div className="flex items-center justify-center lg:justify-start gap-10">
                <button
                  id="slider-button-left"
                  className="swiper-button-prev group flex justify-center items-center border border-solid border-[#FB4C35] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#FB4C35]"
                  data-carousel-prev
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
                  className="swiper-button-next group flex justify-center items-center border border-solid border-[#FB4C35] w-12 h-12 transition-all duration-500 rounded-lg hover:bg-[#FB4C35]"
                  data-carousel-next
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
            <div className="w-full lg:w-3/5">
              {/* slider */}
              <Swiper
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                slidesPerView={1}
                spaceBetween={10}
                freeMode={true}
                breakpoints={{
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                {trendingArticles?.map((data, idx) => (
                  <SwiperSlide key={idx}>
                    <FeedbackCard />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </ContainerBox>
    </section>
  );
};

export default CustomersFeedback;
