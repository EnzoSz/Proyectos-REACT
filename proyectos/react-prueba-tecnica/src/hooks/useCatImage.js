import { useState, useEffect } from "react";
const CAT_PREFIX_IMAGE_URL = "https://cataas.com";
export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState();
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
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` };
}
