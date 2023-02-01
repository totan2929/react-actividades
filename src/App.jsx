import ActividadForm from "./components/ActividadForm";
import ListaActividades from "./components/ListaActividades";

const App = () => {
  return (
    <main className="bg-stone-700 h-screen">
      <div className="container mx-auto p-10">
      <ActividadForm />
      <ListaActividades />
      </div>
    </main>
  );
};

export default App;
