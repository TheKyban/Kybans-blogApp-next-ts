"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "../shared/ToggleTheme/ThemeToggle";
import Image from "next/image";
import styles from "./Navbar.module.css";
import ResponsiveMenu, {
    HamburgerIcon,
} from "../shared/mobilePhone/ResponsiveMenu";

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { status } = useSession();

    console.log(status);
    return (
        <div className="bg-bg">
            <div
                className={`${styles.navbar} flex w-full justify-between items-center gap-5 h-24`}
            >
                {/* Social Container */}
                <div
                    className={`${styles.socials} flex-1 text-center flex gap-3`}
                >
                    <Link href={"#"}>
                        <Image
                            src={"/facebook.png"}
                            width={25}
                            height={25}
                            alt="facebook"
                        />
                    </Link>
                    <Link href={""}>
                        <Image
                            src={"/instagram.png"}
                            width={25}
                            height={25}
                            alt="instagram"
                        />
                    </Link>
                    <Link href={"#"}>
                        <Image
                            src={"/youtube.png"}
                            width={25}
                            height={25}
                            alt="youtube"
                        />
                    </Link>
                    <Link href={"#"}>
                        <Image
                            src={"/instagram.png"}
                            width={25}
                            height={25}
                            alt="instagram"
                        />
                    </Link>
                </div>

                {/* Logo Container */}
                <div className={`${styles.logo} flex-auto text-center`}>
                    <h1 className="uppercase text-3xl font-semibold -font--playpen-sans text-text">
                        Kybans
                    </h1>
                </div>

                {/* Links Container */}
                <div
                    className={`${styles.links} flex-1 flex justify-between items-center text-xl font-serif capitalize`}
                >
                    <ThemeToggle />
                    <Link
                        className={styles.link}
                        onClick={() => setOpen(false)}
                        href={"/"}
                    >
                        Home
                    </Link>

                    {status === "unauthenticated" ? (
                        <>
                            <Link
                                className={styles.link}
                                onClick={() => setOpen(false)}
                                href={"#about"}
                            >
                                About
                            </Link>
                            <Link
                                onClick={() => setOpen(false)}
                                className={styles.link}
                                href={"/login"}
                            >
                                Login
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                onClick={() => setOpen(false)}
                                className={styles.link}
                                href={"/write"}
                            >
                                Write
                            </Link>
                            <button
                                onClick={() => {
                                    signOut();
                                    setOpen(false);
                                }}
                                className={styles.link}
                            >
                                Logout
                            </button>
                        </>
                    )}
                    <HamburgerIcon clickHandler={() => setOpen(!open)} />
                </div>
            </div>
            {open && <ResponsiveMenu clickFunc={() => setOpen(false)} />}
        </div>
    );
};

export default Navbar;
