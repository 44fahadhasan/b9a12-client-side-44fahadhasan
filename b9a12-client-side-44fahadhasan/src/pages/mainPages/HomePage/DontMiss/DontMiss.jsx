import ContainerBox from "../../../../components/ContainerBox/ContainerBox";
import SectionContent from "../../../../components/SectionContent/SectionContent";

const DontMiss = () => {
  return (
    <ContainerBox>
      <div className="py-10">
        {/* <!-- Title --> */}
        <div className="mb-10">
          <SectionContent title={"All Articles"} />
        </div>
        {/* <!-- End Title --> */}

        {/* <!-- Grid --> */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Card --> */}
          <a className="group block rounded-xl" href="#">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-[#FB4C35]">
              Unity’s inside sales team drives 80% of its revenue with Preline.
            </h3>
            <p className="mt-2 text-sm text-gray-600">September 12, 2022</p>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group block rounded-xl" href="#">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-[#FB4C35]">
              Living Spaces creates a unified experience across the customer
              journey.
            </h3>
            <p className="mt-2 text-sm text-gray-600">September 12, 2022</p>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group block rounded-xl" href="#">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-[#FB4C35]">
              Atlassian powers sales and support at scale with Preline.
            </h3>
            <p className="mt-2 text-sm text-gray-600">September 12, 2022</p>
          </a>
          {/* <!-- End Card --> */}

          {/* <!-- Card --> */}
          <a className="group block rounded-xl" href="#">
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="Image Description"
              />
            </div>
            <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-[#FB4C35]">
              Everything you need to know about Preline Pro.
            </h3>
            <p className="mt-2 text-sm text-gray-600">September 12, 2022</p>
          </a>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- Card --> */}
        <div className="mt-12 text-center">
          <a
            className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-full bg-[#FB4C35] text-white shadow-sm  disabled:opacity-50 disabled:pointer-events-none"
            href="#"
          >
            View All
            <svg
              className="flex-shrink-0 size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </a>
        </div>
        {/* <!-- End Card --> */}
      </div>
    </ContainerBox>
  );
};

export default DontMiss;
