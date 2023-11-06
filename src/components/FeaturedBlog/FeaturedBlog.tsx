import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./FeaturedBlog.module.css";

const FeaturedBlog = () => {
    return (
        <div className={`${styles.container} flex gap-10 items-center`}>
            {/* Image */}
            <div
                className={`${styles.imgContainer} relative h-[450px] flex-auto overflow-hidden`}
            >
                <Image
                    src={"/p1.jpeg"}
                    className="object-cover"
                    fill
                    // height={450}
                    // width={450}
                    alt="Trending Blog"
                />
            </div>
            {/**
             * Texts
             * - Title
             * - description
             */}

            <div
                className={`${styles.texts} flex-1 flex flex-col justify-center items-start gap-6 text-start`}
            >
                <h1 className="text-5xl font-medium -font--poppins">
                    This is the Title.
                </h1>
                <p className="-font--inter font-normal text-xl text-softTextColor">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsum, magni architecto nulla, repellat vero eveniet nam
                    iste temporibus aut a vitae quo ipsa. Facilis deserunt
                    cumque incidunt aliquam modi. Cumque..
                </p>

                <Link
                    href={"#"}
                    className="bg-[#f0f0f0] text-black px-4 py-2 rounded"
                >
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default FeaturedBlog;
