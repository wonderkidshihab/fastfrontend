interface Product {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    images: string[];
    slug: string;
    price: number;
    category: number;
    subcategory: number;
    size: string[];
    color: string[];
    stock: number;
    available: boolean;
    created: Date;
    updated: Date;

}

export default Product;