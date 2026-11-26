
export default function ProductCard ({listaProducto})
{
    return (
        <article>
            <div>
                <img src="" alt="" />
            </div>

           {listaProducto.map((producto) => (
                <div key={producto.id}>
                    <h3>{producto.name}</h3>
                    <p>{producto.descripcion}</p>
                    <p>${producto.price}</p>
                </div>
            ))}
        </article>
    )
}