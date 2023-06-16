import Botao from "../../components/Botao";

export default function Principal() {
  return (
    <>
      <div>Principal</div>
      <Botao onClick={() => console.log('clicado')}>Teste</Botao>
    </>
  );
}