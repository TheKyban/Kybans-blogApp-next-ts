import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Category.module.css";

const Category = ({
    image = false,
    imageSrc,
    text,
    href,
    bg,
}: CategoryType) => {
    return (
        <Link
            href={href}
            style={{ background: bg }}
            className={`flex items-center justify-center gap-4 w-full h-20 rounded-md ${styles.category}`}
        >
            {image && (
                <Image
                    src={imageSrc}
                    width={30}
                    height={30}
                    alt={text}
                    className="w-9 h-9 rounded-full"
                />
            )}
            <p className="capitalize text-text text-lg">{text}</p>
        </Link>
    );
};

export default Category;
