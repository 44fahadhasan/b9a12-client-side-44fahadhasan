import { useInfiniteQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import InfiniteScroll from "react-infinite-scroll-component";
import Swal from "sweetalert2";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import LoadingSpiinner from "../../../components/LoadingSpiinner/LoadingSpiinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ArticlesCardAdmin from "./ArticlesCardAdmin/ArticlesCardAdmin";

const AllArticlesPageAdmin = () => {
  const axiosSecure = useAxiosSecure();

  const { data, refetch, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["articles"],
      queryFn: async ({ pageParam = 0 }) => {
        const res = await axiosSecure.get(
          `/articles?limit=9&offset=${pageParam}`
        );
        return { ...res?.data, prevOffset: pageParam };
      },
      getNextPageParam: (lastPage) => {
        const nextOffset = lastPage.prevOffset + 9;
        if (nextOffset >= lastPage.countArticles) {
          return undefined;
        }
        return nextOffset;
      },
    });

  const articles = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.result];
  }, []);

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

  const handleDeclined = (id, data) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This article will be decline",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#212121",
      cancelButtonColor: "#FB4C35",
      confirmButtonText: "Yes, Decline it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/article-decline/${id}`, data)
          .then((res) => {
            if (res.data.modifiedCount === 1) {
              Swal.fire({
                title: "Declined!",
                text: "Articles has been declined",
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

  if (isLoading) return <LoadingSpiinner />;

  return (
    <div>
      <ContainerBox>
        <div className="font-[sans-serif]">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-[#FA4B35] after:rounded-full">
              All Articles
            </h2>
          </div>

          <InfiniteScroll
            dataLength={articles ? articles.length : 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage}
            loading={<LoadingSpiinner />}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
              {articles?.map((article, idx) => (
                <ArticlesCardAdmin
                  key={idx}
                  article={article}
                  handleDelete={handleDelete}
                  handleStatus={handleStatus}
                  handlePremium={handlePremium}
                  handleDeclined={handleDeclined}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </ContainerBox>
    </div>
  );
};

export default AllArticlesPageAdmin;
