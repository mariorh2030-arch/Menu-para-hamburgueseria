import Header from "../components/header.jsx";
import ProductCard from "../components/productCard.jsx";
import SearchBar from "../components/searchBar.jsx";
import { useState } from "react"
import CategoryFilter from "../components/categoryFilter.jsx";
import Footer from "../components/footer.jsx";
import Mensaje from "../components/mensaje.jsx";
import productos from "../data/menu.json"
export default function MenuPage(){
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos")
    const [busqueda, setBusqueda] = useState("")
    const productosFiltrados = categoriaSeleccionada === "todos" ? productos: productos.filter((producto) => producto.categoria === categoriaSeleccionada )
    const productosBuscados =  productosFiltrados.filter((producto) => producto.name.toLowerCase().includes(busqueda.toLowerCase().trim()))
    return(
        <div className="flex flex-col  bg-neutral-900 min-h-screen text-white">
            <Header/>
            <main className="flex-1 min-h-screen max-w-6xl mx-auto px-4 py-6 space-y-6">
                <SearchBar buscar={busqueda} setBuscar={setBusqueda}/>
                <CategoryFilter  Categoria={categoriaSeleccionada} setCategoria={setCategoriaSeleccionada}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    { productosBuscados.length === 0 ? <Mensaje/> :productosBuscados.map(producto => <ProductCard key={producto.id} producto={producto}></ProductCard>)}
                </div>
            </main>
            <Footer/>
        </div>
    )
}