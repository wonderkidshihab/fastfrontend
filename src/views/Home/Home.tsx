import Categories from "./Sections/Categories";
import Navbar from "../../widgets/Navbar";
import Products from "./Sections/Products";

function Home() {
    return (
        <>
        <Navbar />
        <Categories />
        <Products />
        </>
    )
}

export default Home;