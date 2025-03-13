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
<p className="text-sm font-medium text-gray-700 text-right">Selecciona un mes:</p>
        {/* Dropdown para seleccionar el mes */}
        <select value={selectedMonth} onChange={handleMonthChange} className='text-gray-700 p-2 rounded w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition"'>
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