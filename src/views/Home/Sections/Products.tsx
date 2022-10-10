import Product from "../../../Types/Product";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ApiClient from "../../../configs/ApiClient";

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState<string>("");
    useEffect(() => {
        ApiClient.get("/product").then((response) => {
            setProducts(response.data);
        }).catch((error) => {
            setError(error.message);
        }
        );
    }, []);

    if(products.length === 0) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>{error}</div>
    }

    return (
        <div className="flex flex-wrap">
            {products.map((product) => (
                <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4">
                    <Link to={`/product/${product.id}`}>
                        <div className="bg-white rounded shadow">
                            <div className="p-4">
                                <h5 className="font-bold uppercase text-gray-600">{product.name}</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}