import ContainerBox from "../../../../components/ContainerBox/ContainerBox";

const UsersStatistics = () => {
  return (
    <section>
      <ContainerBox>
        <div className="py-16 pt-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our User Statistics
              </h2>
            </div>
          </div>
          <div className="mt-10 pb-1">
            <div className="relative">
              <div className="absolute inset-0 h-1/2x bg-gray-50x"></div>
              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                  <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                    <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        All Users
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">
                        0+
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Normal Users
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">
                        0+
                      </dd>
                    </div>
                    <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                      <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                        Premium Users
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-gray-700">
                        0+
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContainerBox>
    </section>
  );
};

export default UsersStatistics;
