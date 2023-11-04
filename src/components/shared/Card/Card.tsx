import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({
    img,
    slug,
    title,
    description,
    categorySlug,
    createdAt,
}: Blog) => {
    return (
        <div className="flex gap-4 h-24 sm:h-40 sm:gap-7 md:h-48 lg:h-72">


            {/* Image */}

            <div className="relative flex-auto overflow-hidden rounded">
                <Image src={img} fill alt={slug} className="object-cover" />
            </div>

            {/* Texts */}

            <div className="flex-1 items-start justify-center flex flex-col gap-1 sm:gap-2">

                {/* About */}

                <p className="text-softTextColor text-xs sm:text-base">
                    {createdAt} -{" "}
                    <span className="uppercase text-red-600 font-semibold">
                        {categorySlug}
                    </span>
                </p>




                {/* title */}

                <h1 className={`text-text text-base capitalize sm:text-xl md:text-2xl`}>
                    {title.substring(0, 23)}
                </h1>



                {/* Description */}

                <p className="text-softTextColor text-xs sm:text-base">
                    {description.substring(0, 40)}...
                    <Link
                        href={"#"}
                        className="text-red-500 border-b-2 border-red-500 text"
                    >
                        {" "}
                        Read More
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Card;
