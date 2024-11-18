"use client"
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function page() {

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')

    console.log("username", username);
    console.log("email", email);
    console.log("pass", password);
    

    const response = await fetch('http://localhost:5000/signUp', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    })
    if(response.ok){
      router.push('/')
      const data = await response.json()
      console.log(data);
      
    }else{
      console.log('error post');
      
    }
  }
  
  return (
    <>
      <div className="flex justify-center text-center bg-red-500">
        <div className="flex justify-center bg-white rounded-3xl w-2/4">
        <form onSubmit={handleSubmit}>
          <div className="block p-6 bg-white rounded-lg">
            <div className="mb-8 tracking-tight">
              <img 
                className="m-auto p-1"
                src="/ilustrations/undraw_sign_up_n6im.svg"
                height={200}
                width={200}
              />
            </div>

            <div className="relative mb-3">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-5 h-5  dark:text-gray-800"
                  aria-hidden="true"
                >
                  <FaUser />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                name="username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:h-11 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
              />
            </div>

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
                name="email"
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
                name="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg md:h-11 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="password"
              />
            </div>

            <button type="submit" className="bg-gradient-to-r from-[#579FFF] to-[#8677FF] md:w-[500px] md:h-11 rounded-md text-white">Sign up</button>
            <p className="font-normal text-gray-700 dark:text-gray-800">
              Already have an account?<a className="text-[#0d6efd]">Login</a>
            </p>

          </div>
          </form>
        </div>
      </div>
    </>
  );
}
