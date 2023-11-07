"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const LoginBtn = () => {
    return (
        <div
            onClick={() => signIn("google")}
            className="cursor-pointer drop-shadow-personal border border-slate-500 rounded-md flex gap-5 items-center  w-fit px-5 py-3 relative"
        >
            <Image
                className="w-10 h-10 select-none"
                src={"/google.png"}
                height={50}
                width={50}
                alt="Sign in with google"
            />
            <span className="select-none text-xl text-text">
                Sign in with google
            </span>
        </div>
    );
};

export default LoginBtn;
