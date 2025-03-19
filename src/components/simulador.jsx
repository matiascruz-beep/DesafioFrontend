import { useState } from "react";
import MonthSelector from "./monthSelect";
import SimuladorComision from "./simuladorComision";
import Objetivos from "./objetivos";
import PlanAccion from "./planAccion";
import { useGlobalContext } from "../context/GlobalContext"; // Importamos el contexto global

const Simulador = () => {
    // 🚀 Ahora usamos el contexto correctamente:
    const { producto, setProducto, ticketPromedio, setTicketPromedio, valorUSD, setValorUSD, comision, setComision } = useGlobalContext();

    const [Username, setUsername] = useState("");
    const comisiones = [10, 15, 20, 35, 40];
        return (
            <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300">
            {/* Título */}
            <h2 className="font-bold mb-6 text-center text-gray-100 text-xl">
              🚀 Asistente de Metas Mensuales
            </h2>
          
            {/* Nombre */}
            <div className="grid grid-cols-2 gap-4 items-center mb-4 ">
              <label className="text-sm font-semibold text-gray-200 text-right">
                👤 Nombre de socio/a:
              </label>
              <input
                type="text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                className="text-gray-900 w-full p-3 border border-gray-500 rounded-lg shadow-md bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
              />
            </div>
          
            {/* Selección de mes */}
            <div className="mb-4 grid grid-cols-2 gap-4 items-center">
              <MonthSelector />
            </div>
          
            {/* Ticket Promedio */}
            <div className="grid grid-cols-2 gap-4 items-center mb-4">
              <label className="text-sm font-semibold text-gray-200 text-right">
                💳 Mi ticket promedio en USD:
              </label>
              <input
                type="number"
                value={ticketPromedio}
                onChange={(e) => setTicketPromedio(Number(e.target.value))}
                className="text-gray-900 w-full p-3 border border-gray-500 rounded-lg shadow-md bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
              />
            </div>
          
            {/* Valor USD */}
            <div className="grid grid-cols-2 gap-4 items-center mb-4">
              <label className="text-sm font-semibold text-gray-200 text-right">
                💰 Valor USD (valor de cambio):
              </label>
              <input
                type="number"
                value={valorUSD}
                onChange={(e) => setValorUSD(Number(e.target.value))}
                className="text-gray-900 w-full p-3 border border-gray-500 rounded-lg shadow-md bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
              />
            </div>

            {/* Selección de producto */}

            {/* Simulador de comisión */}
            <SimuladorComision />

            {/* Objetivos */}
            <Objetivos />

            {/*Plan de accion*/}
            <PlanAccion />
        </div>
    );
};

export default Simulador;
