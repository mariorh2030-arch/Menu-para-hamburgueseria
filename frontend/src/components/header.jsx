

export default function Header(){


    return(
        <header className="bg-neutral-800 text-center py-10 px-4 border-b-2 border-orange-500 space-y-2">
                <div className="tracking-wider">
                    <img src="" alt="" />
                    <h1 className="text-3xl md:text-4xl uppercase font-bold text-orange-500">Distrito Burger</h1>
                    <p className="text-xl font-bold">Hamburguesas Artesanales</p>
                </div>

                <div>
                    <p className="text-neutral-400 text-lg">El auténtico sabor a la parrilla</p>
                    <p className="text-neutral-400 text-lg">12:00 p. m. - 10:00 p. m.</p>
                </div>
        </header>
    )
}