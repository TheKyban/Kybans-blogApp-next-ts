import Image from "next/image";
import Link from "next/link";
import React from "react";
import PageInfo from "../shared/pageInfo/PageInfo";
import AllLinks from "../shared/allLinks/AllLinks";

const Footer = () => {
    return (
        <div className="flex flex-col gap-10 md:flex-row">
            {/* Page info */}
           <PageInfo/>

            {/* all Links */}
            <AllLinks/>
        </div>
    );
};

export default Footer;
