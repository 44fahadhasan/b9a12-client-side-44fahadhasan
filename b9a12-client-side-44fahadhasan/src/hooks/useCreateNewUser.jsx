import useAxiosPublic from "./useAxiosPublic";

// create a new user in database
const useCreateNewUser = (userData) => {
  const axiosPublic = useAxiosPublic();

  axiosPublic
    .post("/users", userData)
    .then((data) => {
      console.log(data.data);
    })
    .catch((err) => console.log(err));
};

export default useCreateNewUser;
