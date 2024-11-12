import "./App.css";
//Componentes
// import { Otro } from "./components/Otro";
//Custom Hooks
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";
export function App() {
  // para recuperar la cita al cargar la pagina
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshRandomFact();
  };
  return (
    <main>
      <h1>App de Gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Imagen extraida de las 3 primeras palabras de fact"
          />
        )}
      </section>
      {/* <Otro /> */}
    </main>
  );
}
