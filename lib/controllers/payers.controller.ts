import { Request, Response } from "express";
import { Payer, IPayer } from "../models/payer.model";

export class PayersController {
  public index(req: Request, res: Response) {
    Payer.findAll<Payer>({})
      .then((payers: Array<Payer>) => res.json(payers))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: IPayer = req.body;

    Payer.create<Payer>(params)
      .then((payer: Payer) => res.status(201).json(payer))
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response) {
    const payerId: any = req.params.id;

    Payer.findByPk<Payer>(payerId)
      .then((payer: Payer | null) => {
        if (payer) {
          res.json(payer);
        } else {
          res.status(404).json({ errors: ["Payer not found"] });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }
}
