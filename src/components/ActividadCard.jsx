import { useContext } from "react";
import { ActividadContext } from "../context/ActividadContext";

const ActividadCard = ({actividad}) => {
 const {eliminarActividad} = useContext(ActividadContext)
  return (
    <div className="bg-gray-500 text-white p-3 rounded-2xl">
      <h1 className="text-xl font-bold capitalize">{actividad.title}</h1>
      <p className="text-gray-200 text-sm">{actividad.description}</p>
      <button className="bg-orange-500  text-gray-200 px-3 py-1 rounded-xl mt-4 hover:bg-orange-300 hover:text-gray-900" onClick={() => eliminarActividad(actividad.id)}>Eliminar Actividad</button>
    </div>
  );
};

export default ActividadCard;
