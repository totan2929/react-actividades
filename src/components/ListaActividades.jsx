import {actividades as data} from "../../actividades";
import { useState, useEffect } from "react";


const ListaActividades = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    setActividades(data)
  }, [])

  if(actividades.length === 0) {
    return <h1> No hay Actividades</h1>
  }
  return (
    <div>
      {actividades.map((actividad) => (
        <div key={actividad.id}>
            <h1>{actividad.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default ListaActividades;
