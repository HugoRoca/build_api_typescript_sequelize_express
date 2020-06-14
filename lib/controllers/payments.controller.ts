import { Request, Response } from "express";
import { Payment, IPayment } from "../models/payments.model";
import { UpdateOptions, DestroyOptions } from "sequelize";
import { Payer } from '../models/payer.model'

export class PaymentsController {
  public index(_req: Request, res: Response) {
    Payment.findAll({
      include: [
        {
         model: Payer,
         as: 'payer'
        }
      ]
    })
      .then((links: Array<any>) => res.json(links))
      .catch((err: Error) => res.status(500).json(err));
  }

  public create(req: Request, res: Response) {
    const params: IPayment = req.body;

    Payment.create<Payment>(params)
      .then((link: Payment) => res.status(201).json(link))
      .catch((err: Error) => res.status(500).json(err));
  }

  public show(req: Request, res: Response) {
    const linkId: any = req.params.id;

    Payment.findByPk<Payment>(linkId)
      .then((link: Payment | null) => {
        if (link) {
          res.json(link);
        } else {
          res.status(404).json({ errors: ["Link not found"] });
        }
      })
      .catch((err: Error) => res.status(500).json(err));
  }

  public update(req: Request, res: Response) {
    const linkId: any = req.params.id;
    const params: IPayment = req.body;

    const options: UpdateOptions = {
      where: { id: linkId },
      limit: 1
    };

    Payment.update(params, options)
      .then(() => res.status(202).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }

  public delete(req: Request, res: Response) {
    const linkId: any = req.params.id;
    const options: DestroyOptions = {
      where: { id: linkId },
      limit: 1
    };

    Payment.destroy(options)
      .then(() => res.status(204).json({ data: "success" }))
      .catch((err: Error) => res.status(500).json(err));
  }
}