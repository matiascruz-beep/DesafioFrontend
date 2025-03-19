import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const PlanAccion = () => {
  const tasasCierre = [0.3, 0.35, 0.5, 0.5, 0.5];
  const [MinPresentacionesMes, setMinPresentacionesMes] = useState(0);
  const [MinPrestacionesSemana, setMinPrestacionesSemana] = useState(0);
  const { ventasMes, comision } = useGlobalContext();
  const[datosProspectar, setDatosProspectar] = useState(0);

  // Definir la tasa de cierre en función de la comisión
  const obtenerTasaCierre = (comision) => {
    if (comision <= 10) return tasasCierre[0]; // 10% -> 0.3
    if (comision <= 15) return tasasCierre[1]; // 15% -> 0.35
    if (comision <= 20) return tasasCierre[2]; // 20% -> 0.5
    if (comision <= 35) return tasasCierre[3]; // 35% -> 0.5
    return tasasCierre[4]; // 40% -> 0.5
  };

  // Calcular el número de presentaciones necesarias al mes y por semana
  useEffect(() => {
    if (ventasMes > 0) {
      const tasaCierre = obtenerTasaCierre(comision); // Obtener la tasa de cierre correcta según la comisión
      const presentaciones = ventasMes / tasaCierre; // Calculamos las presentaciones mínimas al mes
      setMinPresentacionesMes(presentaciones); // Guardamos el resultado de presentaciones por mes

      // Calcular las presentaciones necesarias por semana (dividir por 25)
      const presentacionesSemana = (presentaciones / 25).toFixed(1); // Aquí dividimos entre 25 como querías
      setMinPrestacionesSemana(presentacionesSemana); // Guardamos el resultado de presentaciones por semana

      // Calcular los nuevos datos a prospectar
      const nuevosDatosProspectar = (ventasMes*6);
      setDatosProspectar(nuevosDatosProspectar);


    }
  }, [comision, ventasMes]); // Se recalcula cuando comision o ventasMes cambian

  return (
    <>
     <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300">
  <h2 className="text-lg font-semibold mb-6 text-center text-white tracking-wide">
    📊 Plan de Acción
  </h2>
  </div>
  <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300">
  {/* Nuevos datos a prospectar */}
  <div className="grid grid-cols-2 gap-4 items-center mb-4">
    <p className="text-sm text-gray-300 text-right font-medium">📊 Nuevos datos a prospectar:</p>
    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
      {datosProspectar}
    </p>
  </div>
  </div>

  {/* Min Presentaciones por Mes */}
  <div className="p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300">
  {/* Min Presentaciones por Semana */}
      <div className="grid grid-cols-2 gap-4 items-center mb-4">
        <p className="text-sm text-gray-300 text-right font-medium">🔢 Min. Presentaciones por mes:</p>
        <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
         {MinPresentacionesMes.toFixed(1)}
       </p>
    </div>
  </div>
<div className="p-6 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300">
  {/* Min Presentaciones por Semana */}
  <div className="grid grid-cols-2 gap-4 items-center mb-4">
    <p className="text-sm text-gray-300 text-right font-medium">🔢 Min. Presentaciones por Semana:</p>
    <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
      {(MinPresentacionesMes)/4+1}
    </p>
  </div>
</div>
    </>
  );
};

export default PlanAccion;
