import { Request, Response } from "express";
import { PayersController } from "../controllers/payers.controller";
import { PaymentsController } from "../controllers/payments.controller";

export class Routes {
  public payersController: PayersController = new PayersController();
  public paymentsController: PaymentsController = new PaymentsController();

  public routes(app): void {
    // ...
    app
      .route("/payers")
      .get(this.payersController.index)
      .post(this.payersController.create);

    app
      .route("/payers/:id")
      .get(this.payersController.show)
      .put(this.payersController.update)
      .delete(this.payersController.delete);

    app
      .route("/payments")
      .get(this.paymentsController.index)
      .post(this.paymentsController.create);

    app
      .route("/payments/:id")
      .get(this.paymentsController.show)
      .put(this.paymentsController.update)
      .delete(this.paymentsController.delete);
  }
}
