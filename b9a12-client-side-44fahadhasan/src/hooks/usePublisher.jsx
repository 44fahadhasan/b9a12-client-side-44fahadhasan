import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePublisher = () => {
  const axiosSecure = useAxiosSecure();

  const { data: publishers = [] } = useQuery({
    queryKey: ["publishers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/publishers");
      return res?.data;
    },
  });

  return { publishers };
};

export default usePublisher;
