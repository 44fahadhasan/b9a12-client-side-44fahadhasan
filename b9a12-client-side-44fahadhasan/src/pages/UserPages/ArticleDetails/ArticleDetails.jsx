import { useLoaderData, useParams } from "react-router-dom";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";

const ArticleDetails = () => {
  const { id } = useParams();

  const { title, time, image, publisher, description, tag } =
    useLoaderData() || {};

  return (
    <ContainerBox>
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 pb-5 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {title}
            </h2>
          </div>

          <img
            src={image}
            className="w-full object-cover lg:rounded h-[28em]"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">{description}</p>
          </div>

          <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <div className="p-4 border-t border-b md:border md:rounded">
              <div className="">
                {/* Publisher */}
                <div className="pb-3">
                  <span className="bg-[#f94c35cb] text-white text-center px-2 py-1 rounded text-sm font-semibold mr-2 inline-flex items-center justify-center">
                    Publisher :
                  </span>
                  <span className="mr-2 font-medium text-gray-800 inline-flex items-center justify-center">
                    {publisher}
                  </span>
                </div>

                {/* date and time */}
                <div className="pb-3">
                  <span className="bg-[#f94c35cb] text-white text-center px-2 py-1 rounded text-sm font-semibold mr-2 inline-flex items-center justify-center">
                    Post Date :
                  </span>
                  <span className="mr-2 font-medium text-gray-800 inline-flex items-center justify-center">
                    {new Date(time).toLocaleString("en-US")}
                  </span>
                </div>

                {/* tags */}
                <div className="pb-5">
                  <span className="bg-[#f94c35cb] text-white text-center px-2 py-1 rounded text-sm font-semibold mr-2 inline-flex items-center justify-center">
                    Tags :
                  </span>

                  {tag?.map((value, idx) => (
                    <span
                      key={idx}
                      className="mr-2 font-medium text-gray-800 inline-flex items-center justify-center"
                    >
                      #{value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </ContainerBox>
  );
};

export default ArticleDetails;
