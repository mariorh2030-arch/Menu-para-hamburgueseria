
export default function ProductCard ({producto})
{
    return (
        <article className="w-full rounded-xl overflow-hidden bg-neutral-800">
            <div>
                <img className="w-full h-48 object-cover" src={producto.image} alt={producto.name} />
            </div>
            <div className="space-y-2 p-4">
                    <h3 className="text-white text-xl font-bold">{producto.name}</h3>
                    <p className="text-neutral-400 text-sm">{producto.descripcion}</p>
                    <p className="text-orange-500 text-xl font-bold">${producto.price}</p>
                </div>

        </article>
    )
}