interface CategoryType {
    image?: boolean;
    imageSrc?: string;
    name: string;
    url: string;
    bg: string;
    height?: number;
}

interface Blog {
    img: string;
    slug: string;
    title: string;
    description: string;
    categorySlug: string;
    createdAt: string;
}
