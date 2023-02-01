import { useState } from "react";

const ActividadForm = () => {
  const [title, setTitle] = useState("");
  return (
    <form>
      <input
        placeholder="Escribe tu Actividad"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Guardar</button>
    </form>
  );
};

export default ActividadForm;
