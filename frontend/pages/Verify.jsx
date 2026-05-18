import { Navbar } from "../components/Navbar";
import { useLocation } from "react-router-dom";

export const Verify = () => {
  const location = useLocation();
  const data = location.state || {};

  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-3xl p-1 border border-green-300 shadow shadow-green-500   bg-gray-200 rounded-full">
          🙍‍♀️
        </h1>
        <div className="space-y-2 mt-3 px-4">
          <h1 className="text-center font-extrabold text-gray-700 text-xl ">
            Verify your identity
          </h1>
          <p>
            Where would you like{" "}
            <span className="font-bold">{data?.name || "your Bank"}</span> to
            send your security code?
          </p>
        </div>
      </div>
      <div className="px-4 mt-4 space-y-4">
        <div className="  border border-gray-400 p-3 rounded-md  ">
          <section className="flex justify-between items-center">
            <div className="flex gap-4">
              <input type="radio" className="cursor-pointer" />
              <div>
                <h1 className="font-semibold ">Text me</h1>
                <p className="text-xs">+ 1***_***_4567</p>
              </div>
            </div>
            <div className="text-2xl">💬</div>
          </section>
        </div>
        <div className="  border border-gray-400 p-3 rounded-md  ">
          <section className="flex justify-between items-center">
            <div className="flex gap-4">
              <input type="radio" className="cursor-pointer" />
              <div>
                <h1 className="font-semibold ">Email me</h1>
                <p className="text-xs">**********65@gm***.com</p>
              </div>
            </div>
            <div className="text-2xl ">✉️</div>
          </section>
        </div>
      </div>
      <div className="flex flex-col justify-end-safe h-80  px-4">
        <div>
          <button className="p-4 bg-gray-700 hover:bg-gray-800 cursor-pointer w-full  rounded-lg text-lg text-gray-200">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
