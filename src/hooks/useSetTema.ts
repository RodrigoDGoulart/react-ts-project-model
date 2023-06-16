import { Tema } from "../contexts";
import {useContext} from 'react'

export default function useSetTema () {
  const tema = useContext(Tema);
  return tema;
}