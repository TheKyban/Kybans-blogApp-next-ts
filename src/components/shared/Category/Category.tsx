import Image from "next/image";
import Link from "next/link";
import React from "react";

const Category = ({
    image = false,
    imageSrc = "/p1.jpeg",
    name,
    url,
    bg,
    height,
}: CategoryType) => {
    return (
        <Link
            href={url}
            style={{ background: bg, height: height ? `${height}px` : "100px" }}
            className={`flex items-center justify-center gap-4 w-full rounded-md ${
                !height && "sm:h-20"
            } `}
        >
            {image && (
                <Image
                    src={imageSrc!}
                    width={30}
                    height={30}
                    alt={name}
                    className="w-9 h-9 rounded-full"
                />
            )}
            <p className="capitalize text-text text-lg">{name}</p>
        </Link>
    );
};

export default Category;
