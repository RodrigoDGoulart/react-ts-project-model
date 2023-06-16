import { createContext, useState } from "react";
import { TemaContextProps } from "../types";
import { temaDefault } from "../styles/theme";
import { ThemeProvider } from "styled-components";

const Tema = createContext({} as TemaContextProps);

function TemaProvider ({children}: any) {
  const [theme, setTheme] = useState(temaDefault);

  return(
    <Tema.Provider value={{setTema: setTheme as Function}}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </Tema.Provider>
  )
}

export {Tema, TemaProvider};