import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import LoadingButtion from "../../../components/LoadingButtion/LoadingButtion";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsersPage = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    refetch,
    isRefetching,
  } = useQuery({
    queryKey: ["users-admin"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users-admin");
      return res?.data;
    },
  });

  const handleAdmin = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This user will be admin",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#212121",
      cancelButtonColor: "#FB4C35",
      confirmButtonText: "Yes, Admin it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users-admin/${id}`)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount === 1) {
              Swal.fire({
                title: "Admin!",
                text: "User has been admin",
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

  return (
    <div>
      <ContainerBox>
        <div className="font-[sans-serif] overflow-x-auto">
          <table className="min-w-full">
            <thead className="whitespace-nowrap">
              <tr>
                <th className="pl-4 w-8">No</th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  User Info
                </th>
                <th className="p-4 text-left text-sm font-semibold text-black">
                  Status
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 fill-gray-400 inline cursor-pointer ml-2"
                    viewBox="0 0 401.998 401.998"
                  >
                    <path
                      d="M73.092 164.452h255.813c4.949 0 9.233-1.807 12.848-5.424 3.613-3.616 5.427-7.898 5.427-12.847s-1.813-9.229-5.427-12.85L213.846 5.424C210.232 1.812 205.951 0 200.999 0s-9.233 1.812-12.85 5.424L60.242 133.331c-3.617 3.617-5.424 7.901-5.424 12.85 0 4.948 1.807 9.231 5.424 12.847 3.621 3.617 7.902 5.424 12.85 5.424zm255.813 73.097H73.092c-4.952 0-9.233 1.808-12.85 5.421-3.617 3.617-5.424 7.898-5.424 12.847s1.807 9.233 5.424 12.848L188.149 396.57c3.621 3.617 7.902 5.428 12.85 5.428s9.233-1.811 12.847-5.428l127.907-127.906c3.613-3.614 5.427-7.898 5.427-12.848 0-4.948-1.813-9.229-5.427-12.847-3.614-3.616-7.899-5.42-12.848-5.42z"
                      data-original="#000000"
                    />
                  </svg>
                </th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap">
              {users?.map((user, idx) => (
                <tr key={idx} className="odd:bg-blue-50">
                  <td className="pl-4 w-8">{idx + 1}</td>
                  <td className="p-4 text-sm">
                    <div className="flex items-center  w-max">
                      <img
                        src={user?.image}
                        className="w-9 h-9 rounded-full shrink-0 object-cover"
                      />
                      <div className="ml-4">
                        <p className="text-sm text-black">{user?.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="p-4">
                    {user?.role === "Admin" ? (
                      (isRefetching && <LoadingButtion />) || "Admin"
                    ) : (
                      <button
                        onClick={() => handleAdmin(user?._id)}
                        className="px-2 py-1 text-xs font-medium text-center text-white bg-[#FB4C35] rounded-lg hover:bg-[#212121] transition-all duration-300"
                      >
                        Make Admin
                      </button>
                    )}
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

export default AllUsersPage;
