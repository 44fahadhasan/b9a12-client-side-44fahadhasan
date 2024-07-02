import PropTypes from "prop-types";
import { useState } from "react";
import CrudButton from "../../../../components/Dashboard/CrudButton/CrudButton";
import Modal from "../../../../components/Dashboard/Modal/Modal";

const ArticlesCardAdmin = ({
  article,
  handleDelete,
  handleStatus,
  handlePremium,
  handleDeclined,
}) => {
  //
  const [openModal, setOpenModal] = useState(false);

  const {
    _id,
    title,
    image,
    description,
    publisher,
    author,
    time,
    status,
    isPremium,
  } = article || {};

  return (
    <>
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        handleDeclined={handleDeclined}
        id={_id}
      />

      <div className="bg-white rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative group">
        <div>
          <img src={image} className="w-full h-96 object-cover" />
          <span
            className={`absolute top-3 left-2 inline-flex items-center   ${
              status === "approved"
                ? "text-green-800 bg-green-100"
                : "bg-red-100 text-red-800"
            } text-sm font-medium px-2.5 py-0.5 rounded-full `}
          >
            <span
              className={`w-2 h-2 me-1 ${
                status === "approved" ? "bg-green-500" : "bg-red-500"
              }  rounded-full`}
            ></span>
            {status}
          </span>
        </div>

        <div className="p-6 absolute bottom-0 left-0 right-0 bg-white opacity-90">
          <span className="text-sm block text-gray-600 mb-1">
            Date: {new Date(time).toLocaleDateString("en-US")} | Publisher:{" "}
            {publisher}
          </span>
          <h3 title={title} className="text-xl font-bold text-[#333]">
            {title?.slice(0, 23)}
          </h3>
          <div className="h-0 overflow-hidden group-hover:h-[100px] sm:group-hover:h-[90px] group-hover:mt-1 transition-all duration-300">
            <p title={description} className="text-gray-600 text-sm">
              {description?.slice(0, 70)}...
            </p>

            {/* author info */}
            <div className="flex mt-2 items-center space-x-4">
              <div className="shrink-0">
                <img
                  height="32"
                  src={author?.image}
                  width="32"
                  className="rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                  {author?.name}
                </p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                  {author?.email}
                </p>
              </div>
            </div>
          </div>

          {/* all button */}
          <div className="group-hover:block absolute left-3 -top-8 hidden transition-all duration-300 animate-bounce hover:animate-none space-x-1">
            <button
              disabled={status === "declined"}
              onClick={() => setOpenModal(true)}
            >
              <CrudButton label={"Decline"} />
            </button>

            <button
              disabled={status === "approved"}
              onClick={() => handleStatus(_id)}
            >
              <CrudButton label={"Approve"} />
            </button>

            <button onClick={() => handleDelete(_id)}>
              <CrudButton label={"Delete"} />
            </button>

            <button disabled={isPremium} onClick={() => handlePremium(_id)}>
              <CrudButton label={"Premium"} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

ArticlesCardAdmin.propTypes = {
  article: PropTypes.object,
  handlePremium: PropTypes.func,
  handleStatus: PropTypes.func,
  handleDelete: PropTypes.func,
  handleDeclined: PropTypes.func,
};

export default ArticlesCardAdmin;
