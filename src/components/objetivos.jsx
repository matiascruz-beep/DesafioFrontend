import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const Objetivos = ({ producto }) => {
  const { comision, ticketPromedio, valorUSD ,ventasMes,actualizarVentasMes} = useGlobalContext(); // Obtenemos la comisión desde el contexto

  const [objetivo, setObjetivo] = useState(900000);
  const [ventasNecesarias, setVentasNecesarias] = useState(0);
  const [volumenCarrera, setVolumenCarrera] = useState(0);

  useEffect(() => {
    calcularVentas();
  }, [objetivo, valorUSD, comision, ventasMes, ticketPromedio]);

  const calcularVentas = () => {
    if (comision > 0) {
      const ventas = Math.round((objetivo * 1.21) / (comision / 100));
      const nuevoVolumenCarrera = valorUSD > 0 ? ventas / valorUSD : 0;

      let nuevasVentasMes = 0;
      if (ticketPromedio > 0) {
        nuevasVentasMes = (nuevoVolumenCarrera / ticketPromedio).toFixed(1);
      }
      setVentasNecesarias(ventas);
      setVolumenCarrera(nuevoVolumenCarrera);
      //setVentasMes(nuevasVentasMes);
      // Actualizar el estado global de ventasMes
      actualizarVentasMes(nuevasVentasMes);
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300">
  <h2 className="text-lg font-semibold mb-6 text-center text-white tracking-wide">
    📊 Objetivos
  </h2>

  {/* Objetivo de Ganancia */}
  <div className="grid grid-cols-2 items-center gap-6 mb-6">
    <label className="text-sm font-medium text-gray-300 text-right">
      💰 Objetivo de Ganancia:
    </label>
    <input
      type="number"
      value={objetivo}
      onChange={(e) => setObjetivo(Number(e.target.value))}
      className="w-full p-3 border border-gray-600 rounded-lg text-center bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
    />
  </div>

  {/* Datos generales */}
  <div className="grid grid-cols-2 gap-6 items-center mb-6">
    <p className="text-sm text-gray-300 text-right">📈 Comisión:</p>
    <p className="text-lg font-semibold text-white">{comision}%</p>
  </div>

  {/* Ventas Necesarias */}
<div className="grid grid-cols-2 gap-6 items-center mb-6">
  <p className="text-sm text-gray-300 text-right">🔢 Ventas Necesarias:</p>
  <p className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500 break-words">
    ${ventasNecesarias.toLocaleString()}
  </p>
</div>


  {/* Volumen Carrera */}
  <div className="grid grid-cols-2 gap-6 items-center mb-6">
    <p className="text-sm text-gray-300 text-right">🏆 Volumen Carrera:</p>
    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
      {volumenCarrera.toFixed(0)} usd
    </p>
  </div>

  {/* Ventas en el Mes */}
  <div className="grid grid-cols-2 gap-6 items-center">
    <p className="text-sm text-gray-300 text-right">💸 Ventas en el Mes:</p>
    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
      {ventasMes}
    </p>
  </div>
</div>

  );
}

export default Objetivos;

