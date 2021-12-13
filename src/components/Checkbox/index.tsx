import { Container } from "./styles";

interface CheckboxProps {
  label: string;
  id: string;
  name: string;
}

function Checkbox({ label, id, name }: CheckboxProps) {
  return (
    <Container>
      <input type="checkbox" id={id} name={name} />
      <label className="text-sm pl-2">{label}</label>
    </Container>
  );
}

export default Checkbox;
