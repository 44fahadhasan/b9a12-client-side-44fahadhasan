import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import SectionContent from "../../../components/SectionContent/SectionContent";
import ArticleCard from "./ArticleCard/ArticleCard";

const AllArticlesPage = () => {
  const articles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="bg-[#E6E7E8] font-[sans-serif]">
      <ContainerBox>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <SectionContent title={"All Articles Available"} />
          </div>
          {/* card container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16  mx-auto">
            {/* single card */}
            {articles?.map((article, idx) => (
              <ArticleCard key={idx} article={article} />
            ))}
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default AllArticlesPage;
