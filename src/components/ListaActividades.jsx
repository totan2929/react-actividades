import ActividadCard from "./ActividadCard";
import { useContext } from "react";
import { ActividadContext } from "../context/ActividadContext";

const ListaActividades = () => {
  
  const {actividades} =useContext(ActividadContext);

  if(actividades.length === 0) {
    return <h1> No hay Actividades</h1>
  }
  return (
    <div>
      {actividades.map((actividad) => (
        <ActividadCard key={actividad.id} actividad={actividad}/>
      ))}
    </div>
  );
};

export default ListaActividades;
