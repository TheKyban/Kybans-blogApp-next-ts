import TrendingCard from "@/components/trendingCard/TrendingCard";
import styles from "./Home.module.css";

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
        </main>
    );
}
