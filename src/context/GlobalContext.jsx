import { createContext, useState, useContext } from "react";

// 1️⃣ Creamos el contexto
const GlobalContext = createContext();

// 2️⃣ Creamos el Provider
export const GlobalProvider = ({ children }) => {
  const [producto, setProducto] = useState("Producto A");
  const [ticketPromedio, setTicketPromedio] = useState(1200);
  const [valorUSD, setValorUSD] = useState(1055);
  const [comision, setComision] = useState(10);
  const [ventasMes, setVentasMes] = useState(0);

   // Función para actualizar ventasMes
   const actualizarVentasMes = (nuevoValor) => {
    setVentasMes(Math.round(nuevoValor));
  };

  return (
    <GlobalContext.Provider value={{ ticketPromedio, setTicketPromedio, valorUSD, setValorUSD, comision, setComision, producto, setProducto,ventasMes, actualizarVentasMes }}>
      {children}
    </GlobalContext.Provider>
  );
};

// 3️⃣ Custom Hook para usar el contexto
export const useGlobalContext = () => useContext(GlobalContext);

