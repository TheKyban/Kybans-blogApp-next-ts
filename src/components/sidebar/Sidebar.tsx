import React from "react";
import MostPopular from "../shared/mostPopular/MostPopular";
import SidebarHeading from "../shared/sidebarHeading/SidebarHeading";
import Category from "../shared/Category/Category";
import { CategoryBG, PopularPostColor } from "@/utils/colors";
import PopularBlogCard from "../shared/PopularBlogCard/PopularBlogCard";

const category: Array<CategoryType> = [
    {
        name: "culture",
        url: "/culture",
        bg: CategoryBG.culture,
    },
    {
        name: "fashion",
        bg: CategoryBG.fashion,
        url: "/",
    },
    {
        name: "food",
        bg: CategoryBG.food,
        url: "/",
    },
    {
        name: "coding",
        bg: CategoryBG.coding,
        url: "/",
    },
    {
        name: "style",
        bg: CategoryBG.style,
        url: "/",
    },
    {
        name: "travel",
        bg: CategoryBG.travel,
        url: "/",
    },
];
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
const Sidebar = () => {
    return (
        <div className="flex flex-col gap-20">
            <MostPopular />

            {/* Categories */}

            <div className="flex flex-col gap-10">
                <SidebarHeading
                    topText="Discover by topic"
                    secondText="Categories"
                />

                <div className="grid grid-cols-auto_fit_2 gap-3">
                    {category.map((item, idx) => (
                        <Category
                            key={idx}
                            name={item.name}
                            bg={item.bg}
                            url={item.url}
                            hg={40}
                        />
                    ))}
                </div>
            </div>

            {/* Editors Pick */}

            <div className="flex flex-col gap-10">
                <SidebarHeading
                    topText="Chosen by the editor"
                    secondText="Editor's Pick"
                />

                <div className="flex flex-col gap-10">
                    {temp.map((item, idx) => (
                        <PopularBlogCard
                            imageUrl="/p1.jpeg"
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
        </div>
    );
};

export default Sidebar;
