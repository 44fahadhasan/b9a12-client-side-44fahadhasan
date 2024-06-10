import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import LoadingSpiinner from "../../../components/LoadingSpiinner/LoadingSpiinner";
import SectionContent from "../../../components/SectionContent/SectionContent";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyArticlesPage = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [declinedText, setDeclinedText] = useState("");

  const axiosSecure = useAxiosSecure();

  const navigate = useNavigate();

  const { user } = useAuth();

  const {
    data: myArticles = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["my-articles", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get("my-articles", {
        headers: { email: user?.email },
      });
      return res?.data;
    },
  });

  // handle delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure? ",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#212121",
      cancelButtonColor: "#FB4C35",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/my-articles/${id}`)
          .then((res) => {
            if (res.data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Article has been deleted.",
                icon: "success",
              });
              refetch();
            }
          })
          .catch((error) => {
            toast.error(error?.message);
          });
      }
    });
  };

  if (isLoading) return <LoadingSpiinner />;

  return (
    <>
      <ContainerBox>
        <div>
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
                      {myArticle?.status === "declined" && (
                        <button
                          onClick={() => {
                            setIsOpen(true);
                            setDeclinedText(myArticle?.declinedText);
                          }}
                          className="ml-3 px-2.5 py-0.5 rounded-full bg-slate-200 text-[#111827] hover:bg-[#F3F4F6] transition-all duration-300"
                        >
                          reason
                        </button>
                      )}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    {(myArticle?.isPremium && "Yes") || "No"}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-800">
                    <button
                      onClick={() =>
                        navigate(`/Update-Article/${myArticle?._id}`)
                      }
                      className="text-blue-600 mr-4"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(myArticle?._id)}
                      className="text-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ContainerBox>
      {/* modal show for declined text */}
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-[#212121] p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-white"
                  >
                    Because of decline
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white/50">{declinedText}</p>
                  <div className="mt-4">
                    <Button
                      className="inline-flex items-center gap-2 rounded-md bg-[#FB4C35] py-1.5 px-3 text-sm/6 font-semibold text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      close
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      {/* modal end */}
    </>
  );
};

export default MyArticlesPage;
