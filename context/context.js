import { createContext, useState } from "react";

export const actual_song = createContext(null);

function Context({ children }) {
  const [song, setSong] = useState();

  return (
    <actual_song.Provider value={{ song, setSong }}>
      {children}
    </actual_song.Provider>
  );
}

export default Context;