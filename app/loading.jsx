import Image from "next/image";

const Loading = () => {
  return (
<div className="text-center flex justify-center">
  <div
    className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-yellow-500 mx-auto"
  ></div>
  <h2 className="text-zinc-900 dark:text-white mt-4">Loading...</h2>
</div>

  );
};

export default Loading;