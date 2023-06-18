import { createContext } from "react";
import { ContextProps } from "../types";
import { useEffect, useState } from "react";
import Usuario from "../services/Usuario";

const Contexto = createContext({} as ContextProps);

function Provider({ children }: any) {
  const [exemplo, setExemplo] = useState('');
  const [usuarios, setUsuarios] = useState<string[]>([]);

  useEffect(() => {
    setExemplo('Definir exemplo');
    // Usuario.getAll()
    //   .then(data => setUsuarios(data))
    //   .catch(error => console.log(error));
  }, []);
  return (
    <>
      <Contexto.Provider value={{ exemplo }}>
        {children}
      </Contexto.Provider>
      {usuarios && usuarios.map(usuario => (
        <div>{usuario}</div>
      ))}
    </>
  );
}

export { Contexto, Provider };