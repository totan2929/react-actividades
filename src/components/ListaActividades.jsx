import ActividadCard from "./ActividadCard";
import { useContext } from "react";
import { ActividadContext } from "../context/ActividadContext";

const ListaActividades = () => {
  
  const {actividades} =useContext(ActividadContext);

  if(actividades.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center"> No hay Actividades</h1>
  }
  return (
    <div className="grid grid-cols-4 gap-2 p-5 rounded-md">
      {actividades.map((actividad) => (
        <ActividadCard key={actividad.id} actividad={actividad}/>
      ))}
    </div>
  );
};

export default ListaActividades;
