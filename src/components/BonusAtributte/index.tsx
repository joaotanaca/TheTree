import { Container } from "./styles";
import { InputDice } from "./styles";

interface BonusAtributteProps {
  label: String;
}

function BonusAtributte({ label }: BonusAtributteProps) {
  return (
    <Container>
      <h1>{label}</h1>
      <InputDice type="text" placeholder="0"/>
    </Container>
  );
}

export default BonusAtributte;
