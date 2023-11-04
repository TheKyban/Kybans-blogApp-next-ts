export const CategoryBG = {
    style: "#57c4ff31",
    fashion: "#da85c731",
    food: "#7fb88133",
    travel: "#ff795736",
    culture: "#ffb04f45",
    coding: "#5e4fff31",
};

export type CategoryName =
    | "style"
    | "fashion"
    | "food"
    | "travel"
    | "culture"
    | "coding";

export interface cate {
    name: CategoryName;
    image: boolean;
    imageSrc: string;
    url: string;
    bg: string;
}
