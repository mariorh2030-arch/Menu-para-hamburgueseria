export default function SearchBar({buscar, setBuscar}){
    return(
        <div className="bg-neutral-800  rounded-lg">
            <label htmlFor="search-products" className="sr-only"> Buscar </label>
            <input value={buscar} onChange={(e) => setBuscar(e.target.value)} className="w-full px-4 py-3 rounded-lg placeholder:text-neutral-400 border border-neutral-700 focus:outline-none focus:border-orange-500 transition-colors" type="search" placeholder="Buscar Productos" id="search-products"/>

        </div>
    )
}