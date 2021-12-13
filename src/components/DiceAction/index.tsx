import { Container } from "./styles";

interface DiceActionProps {
  height?: Number;
  width?: Number;
  add?: Array<Number>;
  animated?: Boolean;
  fast?: Boolean;
}

function DiceAction({ height, width, add, animated, fast }: DiceActionProps) {
  const props = {
    height: !!height ? Number(height) * 16 : 16 * 8,
    width: !!width ? Number(width) * 16 : 16 * 8,
  };

  function RollDice() {
    console.log(add);
  }

  return (
    <Container>
      <button onClick={RollDice}>
        <img
          className={animated ? (fast ? "animated-fast" : "animated") : ""}
          style={{
            width: Number(props.width),
            height: Number(props.height),
          }}
          src="D20.svg"
          alt="Dado"
        />
      </button>
    </Container>
  );
}

export default DiceAction;
