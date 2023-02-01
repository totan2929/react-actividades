import { useState, useContext } from "react";
import { ActividadContext } from "../context/ActividadContext";

const ActividadForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {crearActividad} =useContext(ActividadContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    crearActividad({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu Actividad"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Guardar</button>
    </form>
  );
};

export default ActividadForm;
