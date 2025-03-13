import { useState } from "react";
import MonthSelector from "./monthSelect";
import SimuladorComision from "./simuladorComision";

const Simulador = () => {
    const [ticketPromedio, setTicketPromedio] = useState("");
    const [comision, setComision] = useState(15);
    const [Username, setUsername] = useState("");
    const[valorUSD, setValorUSD] = useState(0);
    const productos = [
        { nombre: "Producto A", precio: 700000 },
        { nombre: "Producto B", precio: 900000 },
        { nombre: "Producto C", precio: 1100000 },
        { nombre: "Producto D", precio: 1300000 },
        { nombre: "Producto E", precio: 1500000 },
        { nombre: "Producto F", precio: 1700000 }
      ];
    const comisiones = [10, 15, 20, 35, 40];
    const [comisionSeleccionada, setComisionSeleccionada] = useState(10);
    const [productoSeleccionado, setProductoSeleccionado] = useState(productos[0]);
    const ganancia = ((productoSeleccionado.precio * comisionSeleccionada) / 100).toFixed(2);

    return(
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="font-bold mb-6 text-center text-gray-800">
            Asistente de Metas Mensuales
        </h2>
    
        {/* Nombre */}
        <div className="grid grid-cols-2 gap-4 items-center mb-4">
            <label className="text-sm font-medium text-gray-700 text-right">Nombre de socio/a:</label>
            <input type="text" value={Username} onChange={(e) => setUsername(e.target.value)}
                className="text-gray-700 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"/>
        </div>
    
        {/* Selección de mes */}
        <div className="mb-4 grid grid-cols-2 gap-4 items-center">
            <MonthSelector />
        </div>
    
        {/* Ticket Promedio */}
        <div className="grid grid-cols-2 gap-4 items-center mb-4">
            <label className="text-sm font-medium text-gray-700 text-right">Mi ticker promedio en USD:</label>
            <input type="number" value={ticketPromedio} onChange={(e) => setTicketPromedio(e.target.value)}
                className="text-gray-700 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"/>
        </div>
    
        {/* Valor USD */}
        <div className="grid grid-cols-2 gap-4 items-center mb-4">
            <label className="text-sm font-medium text-gray-700 text-right">Valor USD (valor de cambio):</label>
            <input type="number" value={valorUSD} onChange={(e) => setValorUSD(e.target.value)}
                className="text-gray-700 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"/>
        </div>
        {/* Simulador de comisión */}
        <SimuladorComision />
    
        
    </div>
    )
}

export default Simulador;