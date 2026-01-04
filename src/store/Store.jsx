import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import axios from "axios";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [notes, setNotes] = useState();

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await axios.get(
          "http://localhost:5000/user/fetchNotes"
        );
        const { data } = response.data;
        console.log(data);

        setNotes(data);
      } catch (error) {
        console.log("FETCHING_ERROR:", error);
      }
    }

    fetchNote();
  }, []);

  return (
    <StoreContext.Provider value={{ notes }}>{children}</StoreContext.Provider>
  );
};
export default StoreContextProvider;
