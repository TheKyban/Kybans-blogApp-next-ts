"use client";

import LoginBtn from "@/components/shared/LoginBtn/LoginBtn";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter();
    const { status } = useSession();
    if (status === "authenticated") {
        router.push("/");
    }
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-100px-430px-140px)] md:min-h-[calc(100vh-100px-230px-140px)]">
            <LoginBtn />
        </div>
    );
};

export default LoginPage;
