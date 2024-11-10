import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";

export default function page() {
  return (
    <>
      <div className="flex justify-center text-center bg-red-500">
        <div className="flex justify-center bg-white rounded-3xl w-2/4">
          <div className="block p-6 bg-white rounded-lg">
            <div className="mb-8 tracking-tight">
              <img 
                className="m-auto p-1"
                src="ilustrations/undraw_firmware_re_fgdy.svg"
                height={200}
                width={200}
              />
            </div>
            <button className="mb-6 border-[1px] rounded-md flex justify-center md:w-[500px] md:h-11 items-center transition duration-500 hover:text-[#0d6efd]">
              <FcGoogle /> Continue With Google
            </button>
            <button className="mb-4 border-[1px] rounded-md flex justify-center md:w-[500px] md:h-11 items-center transition duration-500 hover:text-[#0d6efd]">
              <FaApple className="text-black" /> Continue With Google
            </button>

            <p className="font-normal 950 dark:text-gray-800 transition duration-500 hover:text-[#8677FF] mb-12">
              Or sign in with your email.
            </p>

            <div className="relative mb-3">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5  dark:text-gray-800"
                  aria-hidden="true"
                >
                  <MdEmail />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:h-11 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>

            <div className="relative mb-3">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                >
                  <FaLock />
                </svg>
              </div>
              <input
                type="password"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:h-11 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="password"
              />
            </div>

            <a className="flex w-full justify-center font-normal text-[#8677FF] ">
              Forgot Password?
            </a>
            <button type="button" className="bg-gradient-to-r from-[#579FFF] to-[#8677FF] md:w-[500px] md:h-11 rounded-md text-white">Sign in</button>
            <p className="font-normal text-gray-700 dark:text-gray-800">
              Don't have an account?<a className="text-[#0d6efd]">Sign Up for Free</a>
            </p>

          </div>
        </div>
      </div>
    </>
  );
}
