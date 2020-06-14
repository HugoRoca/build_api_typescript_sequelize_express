import { Request, Response } from "express";
import { PayersController } from "../controllers/payers.controller";

export class Routes {
  public payersController: PayersController = new PayersController();

  public routes(app): void {
    // ...
    app
      .route("/payers")
      .get(this.payersController.index)
      .post(this.payersController.create);
  }
}
