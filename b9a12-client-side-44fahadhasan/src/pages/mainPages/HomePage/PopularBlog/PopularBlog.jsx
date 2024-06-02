import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import SectionContent from "../../../../components/SectionContent/SectionContent";

const PopularBlog = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <ContainerBox>
        <SectionContent title={"Popular Blog"} />

        <div className="sm:flex xl:gap-x-8 gap-x-6 md:h-80 xl:h-96 mt-10 ">
          <div className="w-full md:w-2/3 rounded  relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                12 April 2022
              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                  The Decorated Ways
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                  Dive into minimalism
                </p>
                <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img
              src="https://i.ibb.co/DYxtCJq/img-1.png"
              className="w-full h-full object-cover rounded-md"
              alt="chair"
            />
          </div>
          <div className="w-full md:w-1/3 rounded   sm:mt-0 mt-4 relative">
            <div>
              <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                12 April 2021
              </p>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-xl font-semibold 5 text-white">
                  The Decorated Ways
                </h2>
                <p className="text-base leading-4 text-white mt-2">
                  Dive into minimalism
                </p>
                <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                  <p className="pr-2 text-sm font-medium leading-none">
                    Read More
                  </p>
                  <svg
                    className="fill-stroke"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.75 12.5L10.25 8L5.75 3.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img
              src="https://i.ibb.co/3C5HvxC/img-2.png"
              className="w-full h-full object-cover rounded-md"
              alt="wall design"
            />
          </div>
        </div>

        <div className="lg:flex lg:space-x-2 px-2 lg:p-0 mt-10">
          {/* <!-- post cards --> */}
          <div className="w-full lg:w-2/3">
            <a className="block rounded w-full lg:flex mb-10" href="#">
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')]"
                title="deit is very important"
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                    hendrerit.
                  </div>
                  <p className="text-gray-700 text-base">
                    Duis euismod est quis lacus elementum, eu laoreet dolor
                    consectetur. Pellentesque sed neque vel tellus lacinia
                    elementum. Proin consequat ullamcorper eleifend.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      eduard franz{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </a>

            <div className="rounded w-full lg:flex mb-10">
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')]"
                title="deit is very important"
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Integer commodo, sapien ut vulputate viverra
                  </div>
                  <p className="text-gray-700 text-base">
                    Nam malesuada aliquet metus, ac commodo augue mollis sit
                    amet. Nam bibendum risus sit amet metus semper consectetur.
                    Proin consequat ullamcorper eleifend. Nam bibendum risus sit
                    amet metus semper consectetur.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/women/54.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      Serenity Hughes{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded w-full lg:flex mb-10">
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75 bg-[url('https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')]"
                title="deit is very important"
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Suspendisse varius justo eu risus laoreet fermentum non
                    aliquam dolor
                  </div>
                  <p className="text-gray-700 text-base">
                    Mauris porttitor, velit at tempus vulputate, odio turpis
                    facilisis dui, vitae eleifend odio ipsum at odio. Phasellus
                    luctus scelerisque felis eget suscipit.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      eduard franz{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- right sidebar --> */}
          <div className="w-full lg:w-1/3 px-3">
            {/* <!-- topics --> */}
            <div className="mb-4">
              <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                {" "}
                Popular Topics{" "}
              </h5>
              <ul>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
                    Nutrition
                    <span className="text-gray-500 ml-auto">23 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-indigo-300 mr-3"></span>
                    Food & Diet
                    <span className="text-gray-500 ml-auto">18 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
                    Workouts
                    <span className="text-gray-500 ml-auto">34 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
                    Immunity
                    <span className="text-gray-500 ml-auto">9 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
                  </a>
                </li>
              </ul>
            </div>

            {/* <!-- divider --> */}
            <div className="border border-dotted"></div>

            {/* <!-- subscribe --> */}
            <div className="p-1 mt-4 mb-4 ">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH3Nw44Vv8fSnWw2DlmhXzd3LbiNWs4MRuRl16jBkJ4rsTvgBpnzlIcBsLv8ZRs6cEv4&usqp=CAU"
                alt=""
                className="w-full object-cover"
              />
            </div>

            {/* <!-- divider --> */}
            <div className="border border-dotted"></div>
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default PopularBlog;
