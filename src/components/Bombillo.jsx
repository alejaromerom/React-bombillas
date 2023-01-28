import React from "react";

const Bombillo = ({ bombillos, setBombillos, index }) => {
  /**
   * La función alternarBombillo() toma el estado actual del array de bombillos y luego cambia el
   * estado del bombillo en la posición de index al opuesto de lo que es actualmente.
   */
  function alternarBombillo() {
    const newEstado = [...bombillos];
    newEstado[index] = !newEstado[index];
    setBombillos(newEstado);
  }

  return (
    <div>
      {bombillos[index] ? (
        <>
          <img
            className="encendido"
            src="https://static.vecteezy.com/system/resources/previews/009/408/671/original/light-bulb-transparent-free-png.png"
            alt="Encendido"
          />
        </>
      ) : (
        <>
          <img
            className="apagado"
            src="https://cdn-icons-png.flaticon.com/512/32/32299.png"
            alt="Apagado"
          />
        </>
      )}
      <button onClick={alternarBombillo}>
        {bombillos[index] ? "Encendido" : "Apagado"}
      </button>
    </div>
  );
};

export default Bombillo;
