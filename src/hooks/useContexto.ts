import { useContext } from "react";
import { Contexto } from "../contexts";

export default function useContexto () {
  const context = useContext(Contexto);
  return context;
}