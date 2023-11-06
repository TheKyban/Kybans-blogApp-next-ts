"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "../shared/ToggleTheme/ThemeToggle";
import Image from "next/image";
import styles from "./Navbar.module.css";
import ResponsiveMenu, { HamburgerIcon } from "../shared/mobilePhone/ResponsiveMenu";

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div
            className={`${styles.navbar} flex w-full justify-between items-center gap-5 h-24`}
        >
            {/* Social Container */}
            <div className={`${styles.socials} flex-1 text-center flex gap-3`}>
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
                <Link className={styles.link} href={"/"}>
                    Home
                </Link>
                <Link className={styles.link} href={"#contact"}>
                    Contact
                </Link>
                <Link className={styles.link} href={"#about"}>
                    About
                </Link>
                <HamburgerIcon clickHandler={() => setOpen(!open)} />
            </div>

            {open && <ResponsiveMenu />}
        </div>
    );
};

export default Navbar;
