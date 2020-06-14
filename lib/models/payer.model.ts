import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";
import { Payment } from "./payments.model";

export interface IPayer {
  name: string
  identification_type: string
  identification_number: string
}

export class Payer extends Model {
  public name!: string;
  public identification_type!: string;
  public identification_number!: string;
  public readonly date_created!: Date;
  public readonly date_last_updated!: Date;
}

Payer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(),
        allowNull: false
      },
      identification_type: {
        type: DataTypes.STRING(),
        allowNull: false
      },
      identification_number: {
        type: DataTypes.STRING(),
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'date_created'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'date_last_updated'
      }
    },
    {
      tableName: "Payers",
      timestamps: true,
      underscored: true,
      sequelize: database
    }
  );
  
//Payer.sync()