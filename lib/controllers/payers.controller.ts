import { Request, Response } from "express";
import { Payer } from "../models/payer.model";

export class PayersController {
  public index(req: Request, res: Response) {
    Payer.findAll<Payer>({})
      .then((nodes: Array<Payer>) => res.json(nodes))
      .catch((err: Error) => res.status(500).json(err));
  }
}