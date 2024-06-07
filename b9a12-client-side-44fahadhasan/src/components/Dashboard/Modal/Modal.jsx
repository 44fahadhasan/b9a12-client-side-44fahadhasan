import { Modal as Fmodal } from "flowbite-react";
import PropTypes from "prop-types";
import { useState } from "react";
import LoadingButtion from "../../LoadingButtion/LoadingButtion";

const Modal = ({ setOpenModal, openModal, handleDeclined, id }) => {
  const [loading, setLoading] = useState(false);

  // from handler
  const handleFromSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const decline = e.target.decline.value;
    handleDeclined(id, { declineReason: decline });
    setOpenModal(false);
    setLoading(false);
  };

  return (
    <>
      <Fmodal
        className="bg-[#212121] h-screen w-screen flex justify-center items-center"
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Fmodal.Header />
        <Fmodal.Body>
          <form onSubmit={handleFromSubmit}>
            <div className="col-span-2">
              <label className="block mb-2 text-base font-medium text-gray-900  ">
                Decline reason
              </label>
              <textarea
                name="decline"
                required
                rows="5"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#FA4B35] focus:border-[#FA4B35]  "
                placeholder="Write the decline reason here"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="text-white inline-flex items-center bg-[#212121] hover:bg-[#FA4B35] focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-5 transition-all duration-300"
            >
              {loading ? <LoadingButtion label={"loading"} /> : "Submit"}
            </button>
          </form>
        </Fmodal.Body>
      </Fmodal>
    </>
  );
};

Modal.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
  id: PropTypes.string,
  handleDeclined: PropTypes.func,
};

export default Modal;
