import { Field, Input, Label } from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import LoadingButtion from "../../../components/LoadingButtion/LoadingButtion";
import SectionContent from "../../../components/SectionContent/SectionContent";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import imgFileToUrl from "../../../utils/urlConverter";

const AddPublisherPage = () => {
  const [loading, setLoading] = useState(false);

  const axiosPublic = useAxiosPublic();

  // react from start
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    // get data from input
    const name = data?.name;
    const imageFile = data?.imageFile[0];

    try {
      // get img url form img hosting api
      const imageUrl = await imgFileToUrl(imageFile);

      const publisherData = {
        name,
        image: imageUrl,
      };

      axiosPublic
        .post("/publishers", publisherData)
        .then((res) => {
          if (res?.data?.acknowledged) {
            Swal.fire({
              title: "Success!",
              text: "Publisher added successfully",
              icon: "success",
              confirmButtonText: "Done",
              confirmButtonColor: "#212121",
            });

            setLoading(false);

            // clear from filed
            resetField("title");
            resetField("imageFile");
          }
        })
        .catch((error) => {
          toast.error(error?.message);
          setLoading(false);
        });

      //
    } catch (error) {
      toast.error(error?.message);
      setLoading(false);
    }
  };

  // react from end

  return (
    <div>
      <ContainerBox>
        <SectionContent title={"Add New Publisher"} />

        <div className="mt-10">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6  max-w-md mx-auto font-[sans-serif] border border-[#9CA3AF] rounded-md p-5 px-7"
          >
            {/* publisher name */}
            <Field className="flex items-center">
              <Label className="text-[#333] font-semibold w-36 text-base">
                Publisher Name
              </Label>
              <Input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your publisher name"
                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-base bg-white"
              />
            </Field>
            {errors?.name?.type === "required" && (
              <span className="text-[#FB4C35] text-xs">
                Name can&apos;t be empty
              </span>
            )}

            {/* img */}
            <Field className="flex items-center">
              <Label className="text-[#333] font-semibold w-36 text-base">
                Publisher Image
              </Label>
              <Input
                {...register("imageFile", { required: true })}
                accept="image/*"
                type="file"
                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-base bg-white"
              />
            </Field>
            {errors?.imageFile?.type === "required" && (
              <span className="text-[#FB4C35] text-xs">
                Image can&apos;t be empty
              </span>
            )}

            {/* submit button */}
            <button
              disabled={loading}
              type="submit"
              className="!mt-8 px-6 py-2 w-full bg-[#212121] hover:bg-[#333] text-base text-white mx-auto block rounded"
            >
              {loading ? <LoadingButtion label={"Loading"} /> : "Add"}
            </button>
          </form>
        </div>
      </ContainerBox>
    </div>
  );
};

export default AddPublisherPage;
