import React, { useState } from 'react';

const MonthSelector = () => {
    // Estado para almacenar el mes seleccionado
    const [selectedMonth, setSelectedMonth] = useState(1); // Por defecto es Enero (1)
  
    // Función para manejar el cambio de mes
    const handleMonthChange = (event) => {
      const month = parseInt(event.target.value, 10); // Obtenemos el mes como número
      setSelectedMonth(month);
    };
  
    // Función para obtener el nombre del mes
    const getMonthName = (monthNumber) => {
      const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ];
      return months[monthNumber - 1]; // El índice empieza desde 0
    };
  
    return (
      <>
<p className="text-sm font-semibold text-gray-200 text-right">📅 Selecciona un mes:</p>
        {/* Dropdown para seleccionar el mes */}
        <select value={selectedMonth} onChange={handleMonthChange} className="text-gray-900 w-full p-3 border border-gray-500 rounded-lg shadow-md bg-gray-100 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all duration-300">
          <option value="1">Enero</option>
          <option value="2">Febrero</option>
          <option value="3">Marzo</option>
          <option value="4">Abril</option>
          <option value="5">Mayo</option>
          <option value="6">Junio</option>
          <option value="7">Julio</option>
          <option value="8">Agosto</option>
          <option value="9">Septiembre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </select>
      </>
        
      
    );
  };
  
  export default MonthSelector;