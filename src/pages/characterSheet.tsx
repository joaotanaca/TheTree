import { CharacterSheetPage } from "@styles/pages/characterSheet";

function CharacterSheet() {
    return (
        <CharacterSheetPage>
            <div className="flex justify-center">
                <p>DETALHES PESSOAIS</p>
            </div>
            <div className="flex justify-center">
                <p className="text-slate-500">INVESTIGADOR</p>
            </div>
            <div className="flex justify-center">
                <p>ATRIBUTOS</p>
            </div>
            <div className="flex flex-col items-center">
                <p>PERÍCIAS</p>
                <p className="text-sm">(acesso rápido)</p>
                <div className="bg-green-600 h-20 w-20"></div>
            </div>
            <div className="flex justify-center col-start-1 col-end-3 ">
                <p>COMBATE</p>
            </div>
        </CharacterSheetPage>
    );
}

export default CharacterSheet;
