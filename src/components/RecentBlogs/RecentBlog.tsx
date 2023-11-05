import React from "react";
import Card from "../shared/Card/Card";
import Pagination from "../shared/pagination/Pagination";

const RecentBlog = () => {
    return (
        <div className="flex flex-col gap-8 sm:gap-8">
            <Card
                categorySlug="Calture"
                createdAt="10 May 2023"
                description="this is description this is description this is description"
                img="/p1.jpeg"
                slug="first"
                title="this is the first blog this is the first blog"
            />
            <Card
                categorySlug="Calture"
                createdAt="10 May 2023"
                description="this is description this is description this is description"
                img="/p1.jpeg"
                slug="first"
                title="this is the first blog this is the first blog"
            />
            <Card
                categorySlug="Calture"
                createdAt="10 May 2023"
                description="this is description this is description this is description"
                img="/p1.jpeg"
                slug="first"
                title="this is the first blog this is the first blog"
            />
            <Card
                categorySlug="Calture"
                createdAt="10 May 2023"
                description="this is description this is description this is description"
                img="/p1.jpeg"
                slug="first"
                title="this is the first blog this is the first blog"
            />

            <Pagination />
        </div>
    );
};

export default RecentBlog;
