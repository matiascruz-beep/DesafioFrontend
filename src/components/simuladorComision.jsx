import { useState } from "react";

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
  const [productoSeleccionado, setProductoSeleccionado] = useState("Producto A");
  const [comision, setComision] = useState(10);

  const precioProducto = productos[productoSeleccionado];
  const ganancia = calcularGanancia(precioProducto, comision);

  return (
    <>
    <div className="grid grid-cols-2 gap-4 items-center mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-700 text-right">Selecciona un producto:</label>
      <select
        className="text-gray-700 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
        value={productoSeleccionado}
        onChange={(e) => setProductoSeleccionado(e.target.value)}
      >
        {Object.keys(productos).map((producto) => (
          <option key={producto} value={producto}>{producto}</option>
        ))}
      </select>

      <label className="block mb-2 text-sm font-medium text-gray-700 text-right">Selecciona comisión:</label>
      <select
        className="text-gray-700 w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"
        value={comision}
        onChange={(e) => setComision(parseInt(e.target.value))}
      >
        {[10, 15, 20, 35, 40].map((porcentaje) => (
          <option key={porcentaje} value={porcentaje}>
            {porcentaje}%
          </option>
        ))}
      </select>
    </div>
    <div className="grid grid-cols-2 gap-4 items-center mb-4">
    <p className="text-sm font-medium text-gray-700 text-right">
    Ganancia Calculada: 
  </p>
  <span className="bg-green-400 text-white w-full p-2 border border-green-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition">${ganancia}</span>
    </div>
    </>
  );
}