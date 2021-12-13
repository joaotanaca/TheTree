import { ProgressBarContainer } from "./styles";

interface ProgressBarProps {
  label?: String;
  width?: Number;
  maxAtributte: Number;
  atributte: Number;
  colorBar: String;
}

function ProgressBar({
  label,
  width,
  maxAtributte,
  atributte,
  colorBar,
}: ProgressBarProps) {
  const props = { width: width || 400 };
  return (
    <div className="pt-2.5">
      <label className="text-base">{label}</label>
      <ProgressBarContainer
        style={{
          width: Number(props.width),
          backgroundColor: `${colorBar}`,
        }}
      >
        <p>
          {atributte}/{maxAtributte}
        </p>
      </ProgressBarContainer>
    </div>
  );
}

export default ProgressBar;
