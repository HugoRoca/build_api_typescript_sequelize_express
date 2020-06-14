import { Model, DataTypes } from "sequelize";
import { database } from "../config/database";
import { Payer } from "./payer.model";

export class Payment extends Model {
  public code!: string;
  public code_provider!: string;
  public status!: string;
  public country!: string;
  public amount!: number;
  public description!: string;
  public payer_id!: number;
  public date_paiD!: Date;
  public date_expiration!: Date;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export interface IPayment {
  code: string;
  code_provider: string;
  status: string;
  country: string;
  amount: number;
  description: string;
  payer_id: number;
  date_paid: Date;
  date_expiration: Date;
}

Payment.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    code: {
      type: DataTypes.STRING,
    },
    code_provider: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 0,
    },
    country: {
      type: DataTypes.STRING,
    },
    amount: {
      type: DataTypes.DOUBLE,
    },
    description: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    payer_id: {
      type: DataTypes.INTEGER,
    },
    date_paid: {
      type: DataTypes.DATE,
    },
    date_expiration: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
      field: "date_created",
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: "date_last_updated",
    },
  },
  {
    tableName: "Payments",
    timestamps: true,
    underscored: true,
    sequelize: database,
  }
);

Payment.belongsTo(Payer, {
  foreignKey: 'payer_id',
  as: 'payer'
})

// Payment.sync();
