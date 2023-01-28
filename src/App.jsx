import { useState, useEffect } from "react";
import "./App.css";
import Bombillo from "./components/Bombillo";

function App() {
  /* Cada uno de los booleanos del array es un bombillo */
  const [bombillos, setBombillos] = useState([false]);

  /* Aumenta bombillos */
  function aumentar() {
    setBombillos([...bombillos, false]);
  }

  /* Disminuye bombillos */
  function disminuir() {
    setBombillos(bombillos.slice(0, -1));
  }

  /* Cada vez que cambie bombillos, verifica que sea mayor a 1 y menor a 10. */
  useEffect(() => {
    if (bombillos.length > 10) {
      console.error("No puede pasar de 10 bombillos");
      setBombillos(bombillos.slice(0, -1));
    } else if (bombillos.length === 0) {
      console.error("No puede quitar todos los bombillos");
      setBombillos([...bombillos, false]);
    }
  }, [bombillos]);

  return (
    <div>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>

      {/* Por cada bombillo en el array crea un componente y le envia los datos de los bombillos */}
      {bombillos.map((bombillo, index) => {
        return (
          <Bombillo
            bombillos={bombillos}
            setBombillos={setBombillos}
            index={index}
          ></Bombillo>
        );
      })}
    </div>
  );
}

export default App;
