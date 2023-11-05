import Image from "next/image";
import Link from "next/link";
import React from "react";

const PageInfo = () => {
    return (
        <div className="flex flex-col gap-3 flex-1 max-w-[800px] lg:flex-[2] lg:gap-5">
            {/* Image and Name */}
            <div className="flex gap-3 items-center">
                <Image width={50} height={50} alt="avatar" src={"/logo.png"} />
                <h1 className="text-text text-xl font-bold">Kybans</h1>
            </div>

            {/* About */}
            <p className="text-softTextColor">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
                asperiores dolore error non ut necessitatibus, fugit facilis
                placeat soluta sunt repellat ea esse dolorum quae unde officia
                atque praesentium odit?
            </p>

            {/* Socials */}
            <div className={`flex-1 text-center flex gap-3`}>
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
        </div>
    );
};

export default PageInfo;
