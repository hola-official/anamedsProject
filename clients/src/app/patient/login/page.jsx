"use client";
import Image from "next/image";
import Link from "next/link";
import { Form } from "./form";
import Nav from "../../components/Nav";
import Inter from '../../../../public/userinter.svg'

export default function page() {
  return (
    <main>
      <Nav />
      <div className="h-screen flex justify-center items-center text-black">
        <div className="px-8 pb-8 pt-4 rounded-xl space-y-8">
          <h1 className="font-semibold text-2xl">Login</h1>
          <p className=" text-[#888888]">
            Already have an account?{'  '}
            <Link className="text-[#2AA0CD] hover:underline" href="/register">
              Sign up.
            </Link>
          </p>
          <Form />
        </div>

        <div className="flex justify-center items-center h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/3">
            <div className="flex items-center flex-col justify-center px-5 bg-gradient-to-r from-[#C8E6C] to-[#B3E5FC]">
              <div>
              <h2 className="text-2xl font-bold text-blue-500 sm:text-[24px]">
                  Log in to easily access and manage your medical records. Your health, your control!

                </h2>

                <p className="max-w-xl mt-3 text-[#0000008A]">
                  Don't have an account yet? 
                  <Link href="#" className="text-[#2AA0CD] font-semibold"> Sign up </Link> 
                   today to gain easy access and full control over your medical records!
                </p>
              </div>
              <Image
                src={Inter}
                width={294.21}
                height={248.85}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
