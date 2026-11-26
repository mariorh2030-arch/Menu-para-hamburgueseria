import Header from "../components/header.jsx";
import ProductCard from "../components/productCard.jsx";
import SearchBar from "../components/searchBar.jsx";
import CategoryFilter from "../components/categoryFilter.jsx";
import Footer from "../components/footer.jsx";
import productos from "../data/menu.json"
export default function MenuPage(){

    return(
        <>
            <Header/>
            <main>
                <SearchBar/>
                <CategoryFilter/>
                <ProductCard  listaProducto={productos}/>
            </main>
            <Footer/>
        </>
    )
}