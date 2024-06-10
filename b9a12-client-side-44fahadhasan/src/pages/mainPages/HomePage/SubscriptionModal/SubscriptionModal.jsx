import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const SubscriptionModal = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={() => setIsOpen(false)}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl bg-[#212121] p-6 backdrop-blur-2xl">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-[#FB4C35]"
                  >
                    Become a Premium Member Today!
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-white">
                    Experience the best of journalism with our premium
                    membership. Get unlimited access to exclusive articles,
                    in-depth reports, and a completely ad-free experience.
                  </p>
                  <div className="mt-4 flex gap-x-8">
                    <Button
                      onClick={() => navigate("/Subscription")}
                      className="inline-flex items-center gap-2 rounded-full bg-[#fb4c35db] py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-[#FB4C35]data-[open]:bg-[#FB4C35] data-[focus]:outline-1 data-[focus]:outline-white"
                    >
                      Subscribe
                    </Button>

                    <Button
                      className="inline-flex items-center gap-2 rounded-full bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                      onClick={() => setIsOpen(false)}
                    >
                      Ok, thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

SubscriptionModal.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default SubscriptionModal;
