import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import SectionContent from "../../../components/SectionContent/SectionContent";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyArticlesPage = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: myArticles = [] } = useQuery({
    queryKey: ["my-articles", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("my-articles", {
        headers: { email: user?.email },
      });
      return res?.data;
    },
  });

  console.log(myArticles);
  // declined;declinedText;

  return (
    <div className="">
      <ContainerBox>
        <div className="">
          <SectionContent title={"Your All Articles"} />
        </div>
        <div className="font-sans overflow-x-auto mt-10">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 whitespace-nowrap">
              <tr>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Serial No
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  View
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Premium
                </th>
                <th className="px-4 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
              {myArticles?.map((myArticle, idx) => (
                <tr key={myArticle?._id}>
                  <td className="px-4 py-4 text-sm text-gray-800">{idx + 1}</td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {myArticle?.title?.slice(0, 23)}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    <button
                      onClick={() =>
                        navigate(`/Article-Details/${myArticle?._id}`)
                      }
                      className=" px-2.5 py-0.5 rounded-full bg-[#fb4c35e2] text-white hover:bg-[#FB4C35] transition-all duration-300"
                    >
                      details
                    </button>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    <span
                      className={`inline-flex items-center 
                        text-sm  px-2.5 py-0.5 rounded-full`}
                    >
                      <span
                        className={`w-2 h-2 me-1 ${
                          (myArticle?.status === "approved" &&
                            "bg-[#0B984B]") ||
                          (myArticle?.status === "pending" && "bg-[#EB8A29]") ||
                          (myArticle?.status === "declined" && "bg-[#B31F2E]")
                        }  rounded-full`}
                      ></span>
                      {myArticle?.status}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {(myArticle?.isPremium && "Yes") || "No"}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    <button className="text-blue-600 mr-4">Edit</button>
                    <button className="text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContainerBox>
    </div>
  );
};

export default MyArticlesPage;
