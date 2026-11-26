import Header from "../components/header.jsx";
import ProductCard from "../components/productCard.jsx";
import SearchBar from "../components/searchBar.jsx";
import CategoryFilter from "../components/categoryFilter.jsx";
import Footer from "../components/footer.jsx";
import productos from "../data/menu.json"
export default function MenuPage(){

    return(
        <div className="bg-neutral-900 min-h-screen text-white">
            <Header/>
            <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
                <SearchBar/>
                <CategoryFilter Producto={productos}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {productos.map(producto => <ProductCard key={producto.id} producto={producto}></ProductCard>)}
                </div>
            </main>
            <Footer/>
        </div>
    )
}