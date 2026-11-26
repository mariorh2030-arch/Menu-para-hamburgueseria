
export default function ProductCard ({producto})
{
    return (
        <article>
            <div>
                <img src="" alt="" />
            </div>
            <div>
                    <h3>{producto.name}</h3>
                    <p>{producto.descripcion}</p>
                    <p>${producto.price}</p>
                </div>

        </article>
    )
}