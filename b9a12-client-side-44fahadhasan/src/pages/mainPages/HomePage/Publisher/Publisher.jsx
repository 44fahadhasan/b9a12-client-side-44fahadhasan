import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import SectionContent from "../../../../components/SectionContent/SectionContent";

const publishers = [1, 2, 3, 4, 5, 6, 7, 8];

const Publisher = () => {
  return (
    <div className="bg-[#F3F4F6]">
      <ContainerBox>
        <div className="relative z-40 mx-auto">
          <div className="max-w-4xl mx-auto text-center pb-12">
            <SectionContent title={"Our All Publisher"} />
          </div>

          <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
            {publishers?.map((publisher, idx) => (
              <a
                key={idx}
                className="block w-1/2 py-10 text-center border lg:w-1/4 bg-white"
              >
                <div>
                  <img
                    src="https://redpixelthemes.com/assets/images/icon-portfolio-green.svg"
                    className="block mx-auto"
                  />

                  <p className="pt-4 text-sm font-medium capitalize font-body text-green-900 lg:text-lg md:text-base md:pt-6">
                    portfolio
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default Publisher;
