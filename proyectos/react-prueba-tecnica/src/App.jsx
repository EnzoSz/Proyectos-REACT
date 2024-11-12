import { useState, useEffect } from "react";
import "./App.css";
const CAT_ENDPOINT_RAMDOM_FACT = "https://catfact.ninja/fact";
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?fontSize=50&fontColor=red&json=true`;
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
export function App() {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  // para recuperar la cita al cargar la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RAMDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);
      });
  }, []);

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return;
    const threeFirstsWord = fact.split(" ", 3).join(" ");
    console.log(threeFirstsWord);
    fetch(
      `https://cataas.com/cat/says/${threeFirstsWord}?fontSize=50&fontColor=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { _id } = response;
        const url = `/cat/${_id}/says/${threeFirstsWord}`;
        setImageUrl(url);
      });
  }, [fact]);
  return (
    <main>
      <h1>App de Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && (
          <img
            src={CAT_PREFIX_IMAGE_URL + imageUrl}
            alt="Imagen extraida de las 3 primeras palabras de fact"
          />
        )}
      </section>
    </main>
  );
}
