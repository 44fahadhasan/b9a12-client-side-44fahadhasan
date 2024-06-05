import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import LoadingSpiinner from "../../../components/LoadingSpiinner/LoadingSpiinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ArticlesCardAdmin from "./ArticlesCardAdmin/ArticlesCardAdmin";

const AllArticlesPageAdmin = () => {
  const axiosSecure = useAxiosSecure();

  const { data: articles = [], refetch } = useQuery({
    queryKey: ["articles"],
    queryFn: async () => {
      const res = await axiosSecure.get("/articles");
      return res?.data;
    },
  });

  const handlePremium = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This article will be premium",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#212121",
      cancelButtonColor: "#FB4C35",
      confirmButtonText: "Yes, Premium it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/articles/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount === 1) {
              Swal.fire({
                title: "Premium!",
                text: "Articles has been premium",
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

  const handleStatus = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This article will be approve",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#212121",
      cancelButtonColor: "#FB4C35",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/articles/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount === 1) {
              Swal.fire({
                title: "Approved!",
                text: "Articles has been approved",
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
          .delete(`/articles/${id}`)
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

  if (!articles.length) return <LoadingSpiinner />;

  return (
    <div>
      <ContainerBox>
        <div className="font-[sans-serif]">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-[#FA4B35] after:rounded-full">
              All Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
            {articles.map((article) => (
              <ArticlesCardAdmin
                key={article?._id}
                article={article}
                handleDelete={handleDelete}
                handleStatus={handleStatus}
                handlePremium={handlePremium}
              />
            ))}
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default AllArticlesPageAdmin;
