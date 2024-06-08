import {
  Field,
  Input,
  Label,
  Select as PublisherSelect,
  Textarea,
} from "@headlessui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Swal from "sweetalert2";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import LoadingButtion from "../../../components/LoadingButtion/LoadingButtion";
import SectionContent from "../../../components/SectionContent/SectionContent";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import usePublisher from "../../../hooks/usePublisher";
import imgFileToUrl from "../../../utils/urlConverter";

const animatedComponents = makeAnimated();

const tagOptions = [
  { value: "Lifestyle", label: "Lifestyle" },
  { value: "Politics", label: "Politics" },
  { value: "Technology", label: "Technology" },
  { value: "Health", label: "Health" },
  { value: "Sports", label: "Sports" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Breaking News", label: "Breaking News" },
  { value: "World News", label: "World News" },
  { value: "Web Devlopment", label: "Web Devlopment" },
];

const UpdateMyArticle = () => {
  //

  const {
    _id,
    title,
    publisher,
    description,
    tag: tags,
    image,
  } = useLoaderData() || {};

  const tagDefault = tags.map((data) => ({ value: data, label: data }));

  const [loading, setLoading] = useState(false);
  const [selectTag, setSelectTag] = useState(tagDefault);

  // code for update form start here
  const { publishers } = usePublisher();

  // handle tag
  const handleChange = (selectedData) => {
    const tag = selectedData?.map((data) => data?.value);
    setSelectTag(tag);
  };

  const axiosSecure = useAxiosSecure();

  // react from start here
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    // get data from input
    const title = data?.title;
    const imageFile = data?.imageFile[0];
    const publisher = data?.publisher;
    const description = data?.description;
    const tag = selectTag;

    try {
      // get img url form img hosting api
      let imageUrl;

      if (imageFile) {
        imageUrl = await imgFileToUrl(imageFile);
      }

      const updateArticle = {
        title,
        image: imageUrl || image,
        publisher,
        description,
        tag,
      };

      axiosSecure
        .patch(`/my-articles/${_id}`, updateArticle)
        .then((res) => {
          if (res?.data?.acknowledged) {
            Swal.fire({
              title: "Success!",
              text: "Article update successfully",
              icon: "success",
              confirmButtonText: "Done",
              confirmButtonColor: "#212121",
            });

            setLoading(false);
            //
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
  // react from end here

  // code for update form end here

  return (
    <div>
      <ContainerBox>
        <SectionContent title={"Update Article"} />

        <div className="mt-10">
          {/*  */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6  max-w-md mx-auto font-[sans-serif] border border-[#9CA3AF] rounded-md p-5 px-7"
          >
            {/* title */}
            <Field className="flex items-center">
              <Label className="text-[#333] font-semibold w-36 text-base">
                Title
              </Label>
              <Input
                {...register("title", { required: true })}
                defaultValue={title}
                type="text"
                placeholder="Enter your post title"
                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-base bg-white"
              />
            </Field>
            {errors?.title?.type === "required" && (
              <span className="text-[#FB4C35] text-xs">
                Title can&apos;t be empty
              </span>
            )}

            {/* img */}
            <Field className="flex items-center">
              <Label className="text-[#333] font-semibold w-36 text-base">
                Image
              </Label>
              <Input
                {...register("imageFile")}
                placeholder="fsjdfahjk"
                accept="image/*"
                type="file"
                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-base bg-white"
              />
            </Field>

            {/* publisher */}
            <Field className="flex items-center">
              <Label className="text-[#333] font-semibold w-36 text-base">
                Publisher
              </Label>
              <PublisherSelect
                defaultValue={publisher}
                {...register("publisher", { required: true })}
                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-base bg-white"
              >
                {publishers?.map((option, idx) => (
                  <option value={option?.name} key={idx}>
                    {option?.name}
                  </option>
                ))}
              </PublisherSelect>
            </Field>
            {errors?.publisher?.type === "required" && (
              <span className="text-[#FB4C35] text-xs">
                Publisher can&apos;t be empty
              </span>
            )}

            {/* tag */}
            <Field className="flex items-center">
              <Label className="text-[#333] font-semibold w-36 text-base">
                Tag
              </Label>
              <Select
                required
                defaultValue={tagDefault}
                placeholder="tag"
                closeMenuOnSelect={false}
                isMulti
                options={tagOptions}
                components={animatedComponents}
                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-base bg-white"
                styles={{
                  control: () => ({
                    display: "flex",
                    border: "none",
                  }),
                }}
                onChange={handleChange}
              />
            </Field>

            {/* description */}
            <Field className="flex items-center">
              <Label className="text-[#333] font-semibold w-36 text-base">
                Description
              </Label>

              <Textarea
                {...register("description", { required: true })}
                defaultValue={description}
                className="px-2 py-2 w-full border-b-2 focus:border-[#333] outline-none text-base bg-white"
                rows={2}
              />
            </Field>

            {errors?.description?.type === "required" && (
              <span className="text-[#FB4C35] text-xs">
                Description can&apos;t be empty
              </span>
            )}

            {/* submit button */}
            <button
              disabled={loading}
              type="submit"
              className="!mt-8 px-6 py-2 w-full bg-[#fb4c35e9] hover:bg-[#FB4C35] text-base text-white mx-auto block rounded"
            >
              {loading ? <LoadingButtion label={"loading"} /> : "Update"}
            </button>
          </form>
          {/*  */}
        </div>
      </ContainerBox>
    </div>
  );
};

export default UpdateMyArticle;
