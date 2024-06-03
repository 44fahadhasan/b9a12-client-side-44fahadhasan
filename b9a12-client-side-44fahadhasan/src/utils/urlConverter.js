import axios from "axios";

// api url
const image_hosting_api_url = `https://api.imgbb.com/1/upload?key=${
  import.meta.env.VITE_IMAGE_HOSTING_KEY
}`;

const imgFileToUrl = async (imgFile) => {
  // api start

  const { data } = await axios.post(
    image_hosting_api_url,
    { image: imgFile },
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  if (data?.success) {
    const imgUrl = data?.data?.display_url;
    return imgUrl;
  }
  // api end
};

export default imgFileToUrl;
