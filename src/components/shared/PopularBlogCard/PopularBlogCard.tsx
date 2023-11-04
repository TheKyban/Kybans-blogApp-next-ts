import Image from "next/image";
import React from "react";

interface popularBlogCardtype {
    categorySlug: string;
    title: string;
    auther: string;
    createdAt: string;
    color: string;
    imageUrl?: string;
}

const PopularBlogCard = ({
    categorySlug,
    title,
    auther,
    createdAt,
    color,
    imageUrl,
}: popularBlogCardtype) => {
    return (
        <div className="flex gap-5 items-center">
            {/* Image */}
            {imageUrl && (
                <Image
                    className="rounded-full min-h-[64px] min-w-[64px] h-16 w-16"
                    src={imageUrl}
                    width={40}
                    height={40}
                    alt={auther}
                />
            )}

            {/* Texts */}
            <div className="flex flex-col gap-1 items-start">
                <span
                    className={`capitalize text-white text-xs px-2 py-1 rounded-full`}
                    style={{ background: color }}
                >
                    {categorySlug}
                </span>
                <p className={`capitalize ${imageUrl ? "text-base" : "text-xl"}`}>
                    {title}
                </p>
                <p className="text-xs">
                    <span className="capitalize text-text">{auther}</span> -{" "}
                    <span className="text-softTextColor">{createdAt}</span>
                </p>
            </div>
        </div>
    );
};

export default PopularBlogCard;
