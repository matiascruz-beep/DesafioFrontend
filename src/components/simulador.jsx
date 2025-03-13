import { useState } from "react";
import MonthSelector from "./monthSelect";

const Simulador = () => {
    const [ticketPromedio, setTicketPromedio] = useState("");
    const [comision, setComision] = useState(15);
    const [Username, setUsername] = useState("");
    return(
        <div>
            <h1 className="text-lg font-bold mb-4">Asistente de metas mensuales</h1>
            <label className="block mb-2 text-sm font-medium">
                Nombre de socio/a:
                <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)} 
                className="w-full p-2 border rounded"/>
            </label>
            <MonthSelector />
            <label className="block mb-2 text-sm font-medium">
                Mi ticker promedio en USD
                <input type="number" value={ticketPromedio} onChange={(e) => setTicketPromedio(e.target.value)} 
                className="w-full p-2 border rounded"/>
            </label>
            <label className="block mt-4 mb-2 text-sm font-medium">
                Comision Actual:
                <input type="number" value={comision} onChange={(e) => setComision(e.target.value)} 
                className="w-full p-2 border rounded"/>
            </label>
            <div>
                <p className="mt-4 text-sm font-medium">Comision calculada: ${((ticketPromedio * comision) / 100).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Simulador;