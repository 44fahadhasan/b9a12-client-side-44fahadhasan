import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useUserInfo = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: activeUserInfo, isLoading } = useQuery({
    queryKey: ["specificUserInfo", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/${user?.email}`);
      return res?.data;
    },
    cacheTime: 0,
  });

  return { activeUserInfo, isLoading };
};

export default useUserInfo;
