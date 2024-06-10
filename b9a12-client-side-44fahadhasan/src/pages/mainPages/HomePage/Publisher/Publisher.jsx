import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import LoadingSpiinner from "../../../../components/LoadingSpiinner/LoadingSpiinner";
import SectionContent from "../../../../components/SectionContent/SectionContent";
import usePublisher from "../../../../hooks/usePublisher";

const Publisher = () => {
  const { publishers, isLoading } = usePublisher();

  if (isLoading) return <LoadingSpiinner />;

  return (
    <div className="bg-[#F3F4F6]">
      <ContainerBox>
        <div className="relative z-40 mx-auto">
          <div className="max-w-4xl mx-auto text-center pb-12">
            <SectionContent title={"Our All Publisher"} />
          </div>

          <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
            {publishers?.map((publisher, idx) => (
              <div
                key={idx}
                className="m-2 group px-10 py-5 bg-white/10 rounded-lg flex flex-col items-center justify-center gap-2 relative after:absolute after:h-full after:bg-[#212121] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden  after:-translate-y-full after:hover:translate-y-0 [&amp;_p]:delay-200 [&amp;_p]:transition-all"
              >
                <span className="w-36 card1img aspect-square text-[#212121] group-hover:bg-[#FB4C35] text-5xl rounded-full p-1 transition-all duration-300 group-hover:transition-all group-hover:duration-300 group-hover:-translate-y-2 mx-auto">
                  <img
                    src={publisher?.image}
                    className="w-full h-full rounded-full object-cover"
                  />
                </span>

                <p className="font-semibold text-[#111827] tracking-wider group-hover:text-[#FB4C35] text-xl">
                  {publisher?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default Publisher;
