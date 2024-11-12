import { useState, useEffect } from "react";
import { getrandomFact } from "../services/facts";
export const useCatFact = () => {
    const [fact, setFact] = useState();
    const refreshRandomFact = async () => {
      const newFact = await getrandomFact();
      setFact(newFact);
    }
    useEffect(refreshRandomFact, []);
  
    return { fact, refreshRandomFact };
  };