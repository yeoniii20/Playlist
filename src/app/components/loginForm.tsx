import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black-6 p-8 rounded-lg shadow-lg w-[350px]">
        <h2 className="text-pink-5 text-2xl font-semibold text-center mb-6">
          Login
        </h2>
        <form className="space-y-4">
          <div className="flex items-center bg-black-5 p-3 rounded-md">
            <FaUser className="text-gray-4 mr-3" />
            <input
              type="text"
              placeholder="Username"
              className="bg-transparent outline-none w-full text-white"
            />
          </div>
          <div className="flex items-center bg-black-5 p-3 rounded-md">
            <FaLock className="text-gray-4 mr-3" />
            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none w-full text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-pink-5 text-white font-semibold rounded-md hover:bg-pink-6 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-4 text-center text-gray-4">
          <p>
            Don't have an account?
            <a href="/" className="text-pink-5 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
