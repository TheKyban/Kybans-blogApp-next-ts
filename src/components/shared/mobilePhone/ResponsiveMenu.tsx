import React from "react";
import styles from "./ResponsiveMenu.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
const ResponsiveMenu = ({ clickFunc }: { clickFunc: () => void }) => {
    const { status } = useSession();
    return (
        <div className={`${styles.menu} w-full flex justify-center pt-10`}>
            {/* Links Container */}
            <div
                className={`${styles.links} h-fit flex flex-col gap-10 justify-between items-center text-4xl font-mono capitalize`}
            >
                <Link className={styles.link} onClick={clickFunc} href={"/"}>
                    Home
                </Link>
                <Link
                    className={styles.link}
                    href={"#about"}
                    onClick={clickFunc}
                >
                    Contact
                </Link>
                <Link
                    className={styles.link}
                    href={"#about"}
                    onClick={clickFunc}
                >
                    About
                </Link>

                {status === "unauthenticated" ? (
                    <Link
                        className={styles.link}
                        href={"/login"}
                        onClick={clickFunc}
                    >
                        Login
                    </Link>
                ) : (
                    <>
                        <Link
                            className={styles.link}
                            href={"/write"}
                            onClick={clickFunc}
                        >
                            Write
                        </Link>
                        <button
                            onClick={() => {
                                signOut();
                                clickFunc();
                            }}
                            className={styles.link}
                        >
                            Logout
                        </button>
                    </>
                )}
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
