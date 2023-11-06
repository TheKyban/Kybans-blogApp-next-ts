import Link from "next/link";
import React from "react";

const AllLinks = () => {
    return (
        <div className="flex justify-between flex-1">
            {/* Links on page */}
            <div className="flex flex-col text-softTextColor gap-3">
                <h1 className="text-text text-xl font-semibold">Links</h1>
                <div className="flex flex-col gap-3">
                    <Link href={"/"}>Homepage</Link>
                    <Link href={"#recentBlogs"}>Blog</Link>
                    <Link href={"#about"}>About</Link>
                    <Link href={"#contact"}>Contact</Link>
                </div>
            </div>

            {/* Tags on page */}
            <div className="flex flex-col text-softTextColor gap-3">
                <h1 className="text-text text-xl font-semibold">Tags</h1>
                <div className="flex flex-col gap-3">
                    <Link href={"/"}>Style</Link>
                    <Link href={"/"}>Fashion</Link>
                    <Link href={"/"}>Coding</Link>
                    <Link href={"/"}>Travel</Link>
                </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col text-softTextColor gap-3" id="contact">
                <h1 className="text-text text-xl font-semibold">Socials</h1>
                <div className="flex flex-col gap-3">
                    <Link href={"/"}>Facebook</Link>
                    <Link href={"/"}>Instagram</Link>
                    <Link href={"/"}>Twitter</Link>
                    <Link href={"/"}>Youtube</Link>
                </div>
            </div>
        </div>
    );
};

export default AllLinks;
