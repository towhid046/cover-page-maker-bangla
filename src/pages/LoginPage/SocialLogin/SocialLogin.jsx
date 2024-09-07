import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      {/* Divider */}
      <div className="flex items-center my-4">
        <hr className="w-full border-t border-gray-300" />
        <span className="px-3 text-gray-500">or</span>
        <hr className="w-full border-t border-gray-300" />
      </div>

      {/* Google Login Button */}
      <button
        className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-900 text-white py-2 rounded transition duration-300"
        onClick={() => console.log("Google Login")}
      >
        <FaGoogle className="mr-2 " />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
