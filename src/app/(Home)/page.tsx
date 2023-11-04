import styles from "./Home.module.css";
import Category from "@/components/shared/Category/Category";

/**
 * Temp data
 */
import { CategoryBG } from "@/utils/colors";
import FeaturedBlog from "@/components/FeaturedBlog/FeaturedBlog";
import RecentBlog from "@/components/RecentBlogs/RecentBlog";
import Sidebar from "@/components/sidebar/Sidebar";

const category: Array<CategoryType> = [
    {
        name: "culture",
        image: true,
        imageSrc: "/culture.png",
        url: "/culture",
        bg: CategoryBG.culture,
    },
    {
        name: "fashion",
        image: true,
        bg: CategoryBG.fashion,
        url: "/",
        imageSrc: "/fashion.png",
    },
    {
        name: "food",
        image: true,
        bg: CategoryBG.food,
        url: "/",
        imageSrc: "/food.png",
    },
    {
        name: "coding",
        image: true,
        bg: CategoryBG.coding,
        url: "/",
        imageSrc: "/coding.png",
    },
    {
        name: "style",
        image: true,
        bg: CategoryBG.style,
        url: "/",
        imageSrc: "/style.png",
    },
    {
        name: "travel",
        image: true,
        bg: CategoryBG.travel,
        url: "/",
        imageSrc: "/travel.png",
    },
];

export default function Home() {
    return (
        <main className={`${styles.container} flex flex-col gap-16`}>
            {/* Heading */}
            <h1
                className={`${styles.heading} text-7xl font-sans leading-normal`}
            >
                <span className="font-bold">Hey, Kybans here!</span> Discover my
                stories and creative ideas.
            </h1>

            {/* Trending Blog */}
            <FeaturedBlog />

            {/* Popular Categories */}
            <div className={`flex flex-col gap-10 ${styles.categories}`}>
                <h3 className="font-medium text-2xl  sm:text-4xl">
                    Popular Categories
                </h3>
                <div
                    className={`grid grid-cols-auto_fit gap-4 ${styles.categories}`}
                >
                    {category.map((item, idx) => (
                        <Category
                            key={idx}
                            name={item.name}
                            url={item.url}
                            imageSrc={item.imageSrc}
                            image
                            bg={item.bg}
                        />
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="flex">
                {/* Recent Blogs */}
                <div className="flex flex-col gap-10 flex-[4]">
                    {/* Heading */}
                    <h1 className="text-2xl text-text font-semibold capitalize sm:text-4xl">
                        Recent Blogs
                    </h1>

                    {/* Blogs */}
                    <RecentBlog />
                </div>

                {/* Side bar */}
                <div className={`${styles.sidebar} flex-1 hidden lg:flex`}>
                    <Sidebar />
                </div>
            </div>
        </main>
    );
}
