import Logo from "./Logo";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-100">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-5">
                    <div className="col-span-3">
                        <Logo fillClass="fill-slate-500" />
                        <p className="mt-2">Energiewende erklären, erleben und stärken</p>
                    </div>
                    <div className="col-span-1 flex flex-col">
                        <h4 className="text-slate-800 font-bold text-xl mb-8">Mehr über uns</h4>
                        <p className="text-slate-500 font-bold mb-2">Unsere Ziele</p>
                        <p className="text-slate-500 font-bold mb-2">Mission</p>
                        <p className="text-slate-500 font-bold mb-2">Was wir tun</p>
                    </div>
                    <div className="col-span-1 flex flex-col">
                        <h4 className="text-slate-800 font-bold text-xl mb-8">Kontakt</h4>
                        <p className="text-slate-500 font-bold mb-2">EnerXplain gGmbH</p>
                        <p className="text-slate-500 font-bold mb-2">Eisenhartstraße 18</p>
                        <p className="text-slate-500 font-bold mb-2">14469 Potsdam</p>
                        <p className="text-slate-500 font-bold mb-2">E-Mail: <a href="mailto:" className="text-slate-500 font-bold">info@enerxplain.de</a></p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-row justify-between">
                    <p>&copy; {year} EnerXplain gGmbH -  Alle Rechte vorbehalten.</p>
                    <div className="flex flex-row gap-4">
                        <a href="#" className="text-slate-500 font-bold">Impressum</a>
                        <a href="#" className="text-slate-500 font-bold">Datenschutz</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}