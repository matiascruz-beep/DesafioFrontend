import { useState } from "react";
import { useGlobalContext } from "../context/GlobalContext"; // Importamos el contexto global


const productos = {
  "Producto A": 700000,
  "Producto B": 900000,
  "Producto C": 1100000,
  "Producto D": 1300000,
  "Producto E": 1500000,
  "Producto F": 1700000,
  "Producto J": 1900000,
  "Producto H": 2100000,
};



const calcularGanancia = (precio, comision) => {
  if (comision === 40) {
    return Math.round(precio * (comision / 100)); // Sin quitar IVA
  } else {
    const precioNeto = precio / 1.21; // Se quita el IVA
    return Math.round(precioNeto * (comision / 100));
  }
};

export default function SimuladorComision() {
  const { comision, setComision } = useGlobalContext(); // 🚀 Obtenemos el valor de comision y su función para modificarlo

  const handleComisionChange = (e) => {
    setComision(Number(e.target.value)); // 🔥 Actualizamos el estado globalmente
  };


  const [productoSeleccionado, setProductoSeleccionado] = useState("Producto A");
  //const [comision, setComision] = useState(10);

  const precioProducto = productos[productoSeleccionado];
  const ganancia = calcularGanancia(precioProducto, comision);

  return (
    <>
    <div className="grid grid-cols-2 gap-4 items-center mb-4 bg-gray-800 p-4 rounded-lg shadow-lg">
  {/* Selección de producto */}
  <label className="text-sm font-semibold text-gray-200 text-right">
    📌 Selecciona un producto:
  </label>
  <select
    className="text-gray-900 w-full p-3 border border-gray-500 rounded-lg shadow-md bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
    value={productoSeleccionado}
    onChange={(e) => setProductoSeleccionado(e.target.value)}
  >
    {Object.keys(productos).map((producto) => (
      <option key={producto} value={producto}>
        {producto}
      </option>
    ))}
  </select>

  {/* Selección de comisión */}
  <label className="text-sm font-semibold text-gray-200 text-right">
    💰 Selecciona comisión:
  </label>
  <select
    className="text-gray-900 w-full p-3 border border-gray-500 rounded-lg shadow-md bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300"
    value={comision}
    onChange={handleComisionChange}
  >
    {[10, 15, 20, 35, 40].map((porcentaje) => (
      <option key={porcentaje} value={porcentaje}>
        {porcentaje}%
      </option>
    ))}
  </select>
</div>

{/* Resultado de ganancia */}
<div className="grid grid-cols-2 gap-4 items-center mb-4 bg-gray-800 p-4 rounded-lg shadow-lg">
  <p className="text-sm font-semibold text-gray-200 text-right">
    💵 Tu ganancia neta hoy:
  </p>
  <span className="bg-green-500 text-white w-full p-3 text-center border border-green-700 rounded-lg shadow-md text-lg font-bold">
    ${ganancia.toLocaleString()}
  </span>
</div>
    </>
  );
}