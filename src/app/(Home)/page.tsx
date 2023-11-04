import TrendingCard from "@/components/trendingCard/TrendingCard";
import styles from "./Home.module.css";
import Category from "@/components/Category/Category";

/**
 * Temp data
 */
import { CategoryBG, cate } from "@/utils/colors";
const category: Array<cate> = [
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
            <TrendingCard />

            {/* Popular Categories */}
            <div className={`flex flex-col gap-10 ${styles.categories}`}>
                <h3 className="text-4xl font-medium">Popular Categories</h3>
                <div
                    className={`grid grid-cols-auto_fit gap-4 ${styles.categories}`}
                >
                    {category.map((item, idx) => (
                        <Category
                            key={idx}
                            text={item.name}
                            href={item.url}
                            imageSrc={item.imageSrc}
                            image
                            bg={item.bg}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
