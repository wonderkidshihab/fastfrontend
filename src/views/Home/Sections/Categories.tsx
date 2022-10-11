import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiClient from "../../../configs/ApiClient";
import Category from "../../../Types/Category";


export default function Categories() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        ApiClient.get("/category/").then((response) => {
            setCategories(response.data);
        }).catch((error) => {
            setError(error.message);
        }
        );
    }, []);

    if(categories.length === 0 && error === "") {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    

    return (
        <div className="flex flex-wrap">
            {categories.map((category) => (
                <div key={category.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
                    <Link to={`/products?category=${category.id}`}>
                        <div className="bg-white rounded shadow">
                            <div className="p-4">
                                <h5 className="font-bold uppercase text-gray-600">{category.name}</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

