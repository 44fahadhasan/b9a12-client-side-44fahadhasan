import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import LoadingSpiinner from "../../../../components/LoadingSpiinner/LoadingSpiinner";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const Blog = () => {
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const { data: oldestArticles = [], isLoading } = useQuery({
    queryKey: ["oldestArticles"],
    queryFn: async () => {
      const res = await axiosPublic.get("/oldest-articles");
      return res?.data;
    },
  });

  const blogBigOne = oldestArticles[4];
  const blogBigTwo = oldestArticles[5];

  if (isLoading) return <LoadingSpiinner />;

  return (
    <ContainerBox>
      <div className="w-full sm:w-auto">
        <div className="lg:flex items-stretch">
          {/* left site */}
          <div className="lg:w-1/2">
            {/* left top small */}
            <div className="sm:flex  items-center justify-between xl:gap-x-8 gap-x-6">
              {oldestArticles?.slice(0, 2)?.map((oldestArticle) => (
                <div
                  key={oldestArticle?._id}
                  className="sm:w-1/2 mt-4 relative"
                >
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {new Date(oldestArticle?.time).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {oldestArticle?.title?.slice(0, 20)}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {oldestArticle?.description?.slice(0, 25)}
                      </p>
                      <div>
                        <button
                          onClick={() =>
                            navigate(`/Article-Details/${oldestArticle?._id}`)
                          }
                          className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <img
                    src={oldestArticle?.image}
                    className="w-full h-[273px] object-cover"
                  />
                </div>
              ))}
            </div>

            {/* left big */}
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {new Date(blogBigOne?.time).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    {blogBigOne?.title?.slice(0, 25)}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    {blogBigOne?.description?.slice(0, 30)}
                  </p>
                  <div>
                    <button
                      onClick={() =>
                        navigate(`/Article-Details/${blogBigOne?._id}`)
                      }
                      className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
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
                    </button>
                  </div>
                </div>
              </div>
              <img
                src={blogBigOne?.image}
                className="w-full h-[494px] object-cover mt-8 md:mt-6 hidden sm:block"
              />
              <img
                className="w-full mt-4 sm:hidden h-[494px] object-cover"
                src={blogBigOne?.image}
              />
            </div>
          </div>

          {/* right side */}
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            {/* right big */}
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  {new Date(blogBigTwo?.time).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    {blogBigTwo?.title?.slice(0, 25)}
                  </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    {blogBigTwo?.description?.slice(0, 30)}
                  </p>
                  <div>
                    <button
                      onClick={() =>
                        navigate(`/Article-Details/${blogBigTwo?._id}`)
                      }
                      className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                    >
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
                    </button>
                  </div>
                </div>
              </div>
              <img
                src={blogBigTwo?.image}
                className="w-full h-[494px] object-cover mt-8 md:mt-6 hidden sm:block"
              />
              <img
                className="w-full mt-4 sm:hidden h-[494px] object-cover"
                src={blogBigTwo?.image}
              />
            </div>

            {/* right bottom samll */}
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              {oldestArticles?.slice(2, 4)?.map((oldestArticle) => (
                <div key={oldestArticle?._id} className="mt-4 relative w-full">
                  <div>
                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                      {" "}
                      {new Date(oldestArticle?.time).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        }
                      )}
                    </p>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h2 className="text-xl font-semibold 5 text-white">
                        {oldestArticle?.title?.slice(0, 20)}
                      </h2>
                      <p className="text-base leading-4 text-white mt-2">
                        {oldestArticle?.description?.slice(0, 25)}
                      </p>
                      <div>
                        <button
                          onClick={() =>
                            navigate(`/Article-Details/${oldestArticle?._id}`)
                          }
                          className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline"
                        >
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <img
                    src={oldestArticle?.image}
                    className="w-full h-[273px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
};

export default Blog;
