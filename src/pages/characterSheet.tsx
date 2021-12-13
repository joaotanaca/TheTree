import { Box } from "@styles/components/Box";
import { CharacterSheetPage, Title } from "@styles/pages/characterSheet";
import BonusAtributte from "src/components/BonusAtributte";
import Checkbox from "src/components/Checkbox";
import InputField from "src/components/InputField";
import ProgressBar from "src/components/ProgressBar";

function CharacterSheet() {
  return (
    <CharacterSheetPage>
      <Box>
        <Title
          style={{
            border: 0,
          }}
        >
          DETALHES PESSOAIS
        </Title>
        <InputField label={"Nome"} />
        <InputField label={"Jogador"} />
        <InputField label={"Ocupação"} />
        <InputField label={"Idade"} />
        <InputField label={"Sexo"} select options={["Masculino", "Feminino"]} />
        <InputField label={"Local de nascimento"} />
        <InputField label={"Local de residência"} />
      </Box>
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-2 w-full">
          <div className="flex justify-center">
            <img
              className="border-2 rounded-full w-32 h-32"
              src="https://64.media.tumblr.com/133b69620ecc7c3bc094d71c3efd872d/be9f307df7610f7c-26/s500x750/d4d0cadb3b80ce255a1f263a59bdf691e59b2f6a.png"
              alt="Logo"
            />
          </div>
          <button className="flex justify-center">
            <img className="w-32 h-32" src="D20.svg" alt="Dado" />
          </button>
        </div>
        <div>
          <ProgressBar
            label={"Vida"}
            maxAtributte={12}
            atributte={12}
            colorBar="#dd1c1a"
          />
          <div className="flex justify-around py-3">
            <Checkbox
              id="seriousWound"
              name="seriousWound"
              label="Lesão Grave"
            />
            <Checkbox
              id="unconscious"
              name="unconscious"
              label="Inconsciente"
            />
            <Checkbox id="dying" name="dying" label="Morrendo" />
          </div>
          <div className="flex items-end">
            <ProgressBar
              label={"Sanidade"}
              width={340}
              maxAtributte={65}
              atributte={65}
              colorBar="#161a1d"
            />
            <button>
              <img className="w-full h-7 pl-4" src="D20.svg" alt="Dado" />
            </button>
          </div>
          <div className="flex justify-around py-3">
            <Checkbox
              id="traumatized"
              name="traumatized"
              label="Traumatizado"
            />
            <Checkbox id="maddened" name="maddened" label="Enlouquecido" />
          </div>
          <div>
            <ProgressBar
              label={"Ocultismo"}
              maxAtributte={13}
              atributte={13}
              colorBar="#560bad"
            />
          </div>
        </div>
        <div className="flex justify-around w-full">
          <BonusAtributte label={`Dano Extra`} />
          <BonusAtributte label={`Corpo`} />
          <BonusAtributte label={`Exposição Paranormal`} />
        </div>
      </div>
      <Box>
        <Title>ATRIBUTOS</Title>
      </Box>
      <div>
        <Box>
          <Title>PERÍCIAS</Title>
          <p className="text-xs">(acesso rápido)</p>
        </Box>
      </div>
      <Box className="col-start-1 col-end-3">
        <Title>COMBATE</Title>
      </Box>
    </CharacterSheetPage>
  );
}

export default CharacterSheet;
