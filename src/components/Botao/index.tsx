import { ReactNode } from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
  onClick: () => void;
}

export default function Botao (props: Props) {
  return(
    <BotaoSld
    onClick={props.onClick}
    >
      {props.children}
    </BotaoSld>
  );
}

const BotaoSld = styled.button`
  background-color: ${props => props.theme.corBotao};
`;