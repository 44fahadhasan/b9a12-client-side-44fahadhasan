const LoadingSpiinner = () => {
  return (
    <div className="min-h-60 flex flex-col  border shadow-sm rounded-xl">
      <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
        <div className="flex justify-center">
          <div className="w-16 h-16 border-8 border-dashed rounded-full animate-spin border-[#FB4C35]"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpiinner;
