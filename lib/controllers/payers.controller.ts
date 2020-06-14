import { Request, Response } from "express";
import { Payer, IPayer } from "../models/payer.model";
import { UpdateOptions, DestroyOptions } from "sequelize";

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

  public update(req: Request, res: Response) {
    const payerId: any = req.params.id;
    const params: IPayer = req.body;

    const update: UpdateOptions = {
      where: { id: payerId },
      limit: 1
    };

    Payer.update(params, update)
      .then(() => res.status(202).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response) {
    const payerId: any = req.params.id;
    const options: DestroyOptions = {
      where: { id: payerId },
      limit: 1
    };

    Payer.destroy(options)
      .then(() => res.status(204).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }
}
