import { createContext, useState, useEffect } from "react";
import {actividades as data} from "../data/actividades";

export const ActividadContext = createContext();

export const ActividadContextProvider = (props) => {
  const [actividades, setActividades] = useState([]);

  const crearActividad = (actividad) => {
    setActividades([
      ...actividades,
      {
        title: actividad.title,
        id: actividades.length,
        description: actividad.description + " " +(actividades.length + 1),
      },
    ]);
  };

  const eliminarActividad = (actividadId) => {
    setActividades(
      actividades.filter((actividad) => actividad.id !== actividadId)
    );
  };

  useEffect(() => {
    setActividades(data);
  }, []);

  return (
    <ActividadContext.Provider
      value={{
        actividades,
        eliminarActividad,
        crearActividad,
      }}
    >
      {props.children}
    </ActividadContext.Provider>
  );
};
