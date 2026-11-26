

export default function CategoryFilter() {
    return(
        <div className="flex flex-wrap gap-2">
            <button className ="bg-neutral-800 text-white rounded-full px-5 py-2 hover:bg-orange-500 transition-colors" type="button">Todos</button>
            <button className ="bg-neutral-800 text-white rounded-full px-5 py-2 hover:bg-orange-500 transition-colors" type="button">Hamburguesas</button>
            <button className ="bg-neutral-800 text-white rounded-full px-5 py-2 hover:bg-orange-500 transition-colors" type="button">Complementos</button>
            <button className ="bg-neutral-800 text-white rounded-full px-5 py-2 hover:bg-orange-500 transition-colors" type="button">Bebidas</button>
            <button className ="bg-neutral-800 text-white rounded-full px-5 py-2 hover:bg-orange-500 transition-colors" type="button">Postres</button>
        </div>
    )
}