import React from "react";
import styles from "./ResponsiveMenu.module.css";
import Link from "next/link";

const ResponsiveMenu = () => {
    return (
        <div
            className={`${styles.menu} z-50 bg-Bg absolute w-full bottom-0 top-20 left-0 right-0 flex justify-center pt-32`}
        >
            {/* Links Container */}
            <div
                className={`${styles.links} h-fit flex flex-col gap-5 justify-between items-center text-4xl font-mono capitalize`}
            >
                <Link className={styles.link} href={"/"}>
                    Home
                </Link>
                <Link className={styles.link} href={"#about"}>
                    Contact
                </Link>
                <Link className={styles.link} href={"#about"}>
                    About
                </Link>
            </div>
        </div>
    );
};
export const HamburgerIcon = ({
    clickHandler,
}: {
    clickHandler: () => void;
}) => {
    return (
        <div
            onClick={clickHandler}
            className={`${styles.hamburger} cursor-pointer hidden flex-col w-6 h-5 justify-between box-border`}
        >
            <div className="w-full h-[2px] bg-text rounded"></div>
            <div className="w-full h-[2px] bg-text rounded"></div>
            <div className="w-full h-[2px] bg-text rounded"></div>
        </div>
    );
};
export default ResponsiveMenu;
