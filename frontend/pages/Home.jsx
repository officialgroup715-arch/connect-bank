import { Link } from "react-router-dom";
import plaidLogo from "../src/assets/logos/plaid.svg";
export const Home = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-6 ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center text-5xl rounded-full border border-gray-400 bg-slate-200 shadow-lg w-16 h-16 mb-6 md:mt-8">
          <img src={plaidLogo} alt="Plaid Logo" className="w-28 h-28" />
        </div>
        <h1 className="text-lg md:text-3xl text-center font-bold ">
          This application uses <span className="font-bold">Plaid</span> to
          connect your account
        </h1>
        <div className=" border border-gray-300 md:border-gray-200 shadow-lg md:border-3 w-full max-w-md px-2 rounded-lg mt-5 ">
          <div className="my-4">
            <h1 className="md:text-2xl">
              ⚡<span className="ml-1  font-bold ">Connect in seconds</span>
            </h1>
            <p className="mx-7 md:mx-9 md:text-xl">
              {" "}
              8000+ apps trust Plaid to quickly connect to financial
              institutions
            </p>
          </div>
          <div className="mb-4">
            <h1 className="md:text-2xl">
              🛡️<span className="ml-1 font-bold">Keep your data safe</span>
            </h1>
            <p className="mx-7 md:mx-9 md:text-xl">
              {" "}
              Plaid uses best-in-class encryption to help protect your data
            </p>
          </div>
        </div>

        <div className="flex justify-end h-88 md:h-60 items-end">
          <h1 className=" border-gray-200 border "></h1>
          <div className="mx-5">
            <h1 className="text-base md:text-2xl text-center">
              By continuing you agree to Plaid's{" "}
              <span className="underline">Privacy Policy</span> and to receiving
              updates on Plaid.com
            </h1>

            <button className="w-full p-4 bg-gray-900 text-white rounded-lg text-lg md:text-2xl mt-4 cursor-pointer hover:bg-gray-800 hover:text-gray-400">
              <Link to="/search">Continue</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
