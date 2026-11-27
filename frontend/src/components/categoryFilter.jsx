

export default function CategoryFilter({Categoria, setCategoria}) {

    return(
        <div className="flex flex-wrap gap-2">
            <button onClick={() => setCategoria("todos")} className ={` text-white rounded-full px-5 py-2 ${ Categoria === "todos" ?  "bg-orange-500" : "bg-neutral-800"} transition-colors`} type="button">Todos</button>
            <button onClick={() => setCategoria("hamburguesas")} className ={` text-white rounded-full px-5 py-2 ${ Categoria === "hamburguesas" ?  "bg-orange-500" : "bg-neutral-800"} transition-colors`} type="button">Hamburguesas</button>
            <button onClick={() => setCategoria("complementos")} className ={` text-white rounded-full px-5 py-2 ${ Categoria === "complementos" ?  "bg-orange-500": "bg-neutral-800"} transition-colors`} type="button">Complementos</button>
            <button onClick={() => setCategoria("bebidas")} className ={` text-white rounded-full px-5 py-2 ${ Categoria === "bebidas" ?  "bg-orange-500" : "bg-neutral-800"} transition-colors`} type="button">Bebidas</button>
            <button onClick={() => setCategoria("postres")} className ={` text-white rounded-full px-5 py-2 ${ Categoria === "postres" ?  "bg-orange-500" : "bg-neutral-800"} transition-colors`} type="button">Postres</button>
        </div>
    )
}