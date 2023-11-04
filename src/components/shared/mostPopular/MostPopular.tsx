import React from "react";
import PopularBlogCard from "../PopularBlogCard/PopularBlogCard";
import { PopularPostColor } from "@/utils/colors";
import SidebarHeading from "../sidebarHeading/SidebarHeading";

/**
 * Temp DATA
 */

const temp = [
    {
        categorySlug: "culture",
        color: PopularPostColor.culture,
    },
    {
        categorySlug: "food",
        color: PopularPostColor.food,
    },
    {
        categorySlug: "coding",
        color: PopularPostColor.coding,
    },
    {
        categorySlug: "travel",
        color: PopularPostColor.travel,
    },
    {
        categorySlug: "fashion",
        color: PopularPostColor.fashion,
    },
];
const MostPopular = () => {
    return (
        <div className="flex flex-col gap-14">
            {/* Heading */}
            <SidebarHeading topText="What's hot 🔥" secondText="Most Popular"/>
            

            {/* Blogs */}

            <div className="flex flex-col gap-10">
                {temp.map((item, idx) => (
                    <PopularBlogCard
                        key={idx}
                        auther="aditya"
                        categorySlug={item.categorySlug}
                        color={item.color}
                        createdAt="10 Oct 2023"
                        title="this is the most popular blog ever in the world"
                    />
                ))}
            </div>
        </div>
    );
};

export default MostPopular;
