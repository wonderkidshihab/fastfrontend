import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ApiClient from "../../configs/ApiClient";
import Product from "../../Types/Product";
import Navbar from "../../widgets/Navbar";


function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [cartCount, setCartCount] = useState(0);
    const [error, setError] = useState<string>(""); 
    useEffect(() => {
        ApiClient.get(`/product/${id}/`).then((response) => {
            setProduct(response.data);
        }).catch((error) => {
            setError(error.message);
        }
        );
    }, [id]);

    const increaseCartCount = () => {
        setCartCount(cartCount + 1);
    }

    const decreaseCartCount = () => {
        setCartCount(cartCount - 1);
    }



    if (product === null && error === "") {
        return <div>Loading...</div>
    }
  return (

    <>
    <Navbar />
    {/* Product details */}
    <div className="container mx-auto px-6 py-8">
        <div className="md:flex md:items-center">
            <div className="w-full h-64 md:w-1/2 lg:h-96">
                <img className="h-full w-full rounded-md object-cover max-w-lg mx-auto" src={product?.thumbnail} alt={product?.name} />
            </div>
            <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
                <h3 className="text-gray-700 uppercase text-lg">{product?.name}</h3>
                <span className="text-gray-500 mt-3">${product?.price}</span>
                <hr className="my-3" />
                {
                    cartCount > 0 && (
                        <div className="mt-2">
                    <label className="text-gray-700 text-sm" htmlFor="count">Count:</label>
                    <div className="flex items-center mt-1">
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={decreaseCartCount}>
                            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M20 12H4"></path>
                            </svg>
                        </button>
                        <span className="text-gray-700 text-lg mx-2">{cartCount}</span>
                        <button className="text-gray-500 focus:outline-none focus:text-gray-600" onClick={increaseCartCount}>
                            <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M12 4v16m8-8H4"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                )

                    
                }
                <div className="mt-3">
                    <label className="text-gray-700 text-sm" htmlFor="count">Color:</label>
                    <div className="flex items-center mt-1">
                        {
                            product?.color.map((color) => (
                                <button key={color} className="h-5 w-5 rounded-full border-2 border-gray-200 mr-2 focus:outline-none">
                                    <span className="rounded-full w-full h-full inline-block align-top" style={{ backgroundColor: "#"+ color }}></span>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className="flex items-center mt-6">
                    <button className="px-3 py-2 bg-gray-700 text-white text-xs uppercase font-medium rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600" onClick={increaseCartCount}>Add to cart</button>
                    <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none focus:bg-gray-200" onClick={()=>{setCartCount(0)}}>
                        <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default ProductPage;