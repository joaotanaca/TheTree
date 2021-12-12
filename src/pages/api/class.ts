import { NextApiRequest, NextApiResponse } from "next";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {
        case "GET":
            return res.json(["gabriel"]);
        default:
            return res.status(405).send("Metodo não aceito");
    }
}
