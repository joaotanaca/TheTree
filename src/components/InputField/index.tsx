import { InputContainer, SelectContainer } from "./styles";

interface InputFieldProps {
  label?: String;
  select?: Boolean;
  options?: Array<String>;
}

function InputField({ label, select, options }: InputFieldProps) {
  return (
    <section>
      <h1 className="text-base">{label}</h1>
      {select ? (
        <SelectContainer>
          <option />
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </SelectContainer>
      ) : (
        <InputContainer></InputContainer>
      )}
    </section>
  );
}

export default InputField;
