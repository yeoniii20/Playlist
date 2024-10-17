import { FaUser, FaLock, FaTimes } from "react-icons/fa";

const LoginForm = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-black-6 p-8 rounded-lg shadow-lg w-[350px]">
        <button
          onClick={closeModal}
          className="absolute top-8 right-8 text-gray-4 hover:text-gray-0"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-pink-5 text-2xl font-semibold text-center mb-8">
          Login
        </h2>
        <form className="space-y-12">
          <div className="space-y-4">
            <div className="flex items-center bg-black-5 p-3 rounded-md">
              <FaUser className="text-gray-4 mr-3" />
              <input
                type="text"
                placeholder="Username"
                autoComplete="off"
                className="bg-transparent outline-none w-full text-gray-0"
              />
            </div>
            <div className="flex items-center bg-black-5 p-3 rounded-md">
              <FaLock className="text-gray-4 mr-3" />
              <input
                type="password"
                placeholder="Password"
                autoComplete="off"
                className="bg-transparent outline-none w-full text-gray-0"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-pink-5 text-gray-0 font-semibold rounded-md hover:bg-pink-6 transition duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="mt-8 text-center text-gray-4">
          <p>
            Don't have an account? &nbsp;
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
