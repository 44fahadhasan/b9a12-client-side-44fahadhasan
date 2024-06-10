import useAxiosPublic from "./useAxiosPublic";

// create a new user in database
const useCreateNewUser = (userData) => {
  const axiosPublic = useAxiosPublic();

  axiosPublic
    .post("/users", userData)
    .then(() => {})
    .catch(() => {});
};

export default useCreateNewUser;
