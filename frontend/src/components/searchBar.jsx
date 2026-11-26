export default function SearchBar(){
    return(
        <div className="bg-neutral-800  rounded-lg">
            <label htmlFor="search-products" className="sr-only"> Buscar </label>
            <input className="w-full px-4 py-3 rounded-lg placeholder:text-neutral-400 border border-neutral-700 focus:outline-none focus:border-orange-500 transition-colors" type="search" placeholder="Buscar Productos" id="search-products"/>

        </div>
    )
}