import mongoose from "mongoose";
import connection from "@db/connection";

const SettlementsSchema = async () => {
    await connection();
    return new mongoose.Schema({
        name: {
            type: String,
            required: [true, "É preciso adicionar o titulo do artigo."],
            maxlength: [20, "O titulo precisa ter no máximo 20 carácter."],
        },
        population: {
            type: String,
            required: [true, "É necessário adicionar uma população."],
        },
        defense: {
            type: String,
            required: [true, "É necessário adicionar uma defesa."],
        },
        commerce: {
            type: String,
            required: [true, "É necessário adicionar um comercio."],
        },
        organizations: {
            type: String,
            required: [true, "É necessário adicionar uma organização."],
        },
        planes: {
            type: [String],
            required: [true, "É necessário adicionar um plano."],
        },
    });
};
export default mongoose.models.Settlements ||
    mongoose.model("Settlements", await SettlementsSchema());
// "government":{}
