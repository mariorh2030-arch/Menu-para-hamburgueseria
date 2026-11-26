export default function Footer(){
    return (
        <footer className="text-center bg-neutral-800 border-t-2 border-orange-500 mt-8 py-8 px-4 space-y-3">
            
                <div className="space-y-3">
                    <p className="text-2xl text-orange-500 font-bold">Distrito Burger</p>
                    <p className="text-neutral-400 text-sm">Tuxtla Guitierrez, Chiapas</p>
                    <p className="text-neutral-400 text-sm">12:00 p. m. - 10:00 p. m.</p>
                    <a className="font-medium bg-green-600 rounded-lg py-3 px-5 inline-block hover:bg-green-700 transition-colors" href="">Contactanos por Whatsapp</a>
                </div>
                <hr className="border border-neutral-500" />
                <div className="space-y-3">
                    <p className="text-neutral-400">2026 Distrito Burger</p>
                    <p className="text-orange-500 text-sm">Desarrollado por Nexora Digital</p>
                </div>
            
        </footer>
    )
}