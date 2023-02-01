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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-4">Crear Actividad</h1>
      <input
        placeholder="Escribe tu Actividad"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-slate-300 p-3 w-full mb-2"
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripción de la tarea"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-slate-300 p-3 w-full mb-2"
      ></textarea>
      <button
        className="bg-orange-400 px-3 py-1 text-white hover:bg-orange-200 hover:text-black rounded-lg"
      >Guardar</button>
    </form>
    </div>
  );
};

export default ActividadForm;
