import { useContext } from "react";
import { ActividadContext } from "../context/ActividadContext";

const ActividadCard = ({actividad}) => {
 const {eliminarActividad} = useContext(ActividadContext)
  return (
    <div>
      <h1>{actividad.title}</h1>
      <p>{actividad.description}</p>
      <button onClick={() => eliminarActividad(actividad.id)}>Eliminar Actividad</button>
    </div>
  );
};

export default ActividadCard;
