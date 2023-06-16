import { createContext } from "react";
import { ContextProps } from "../types";
import { useEffect, useState } from "react";

const Contexto = createContext({} as ContextProps);

function Provider({ children }: any) {
  const [exemplo, setExemplo] = useState('');

  useEffect(() => {
    setExemplo('Definir exemplo');
  }, []);
  return (
    <Contexto.Provider value={{ exemplo }}>
      {children}
    </Contexto.Provider>
  );
}

export { Contexto, Provider };