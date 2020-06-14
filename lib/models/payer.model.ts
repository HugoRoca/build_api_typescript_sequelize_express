import { Sequelize, Model, DataTypes, BuildOptions } from "sequelize";
import { database } from "../config/database";

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
        type: new DataTypes.STRING(),
        allowNull: false
      },
      identification_type: {
        type: new DataTypes.STRING(),
        allowNull: false
      },
      identification_number: {
        type: new DataTypes.STRING(),
        allowNull: false
      },
      date_created: {
        type: new DataTypes.DATE
      },
      date_last_updated: {
        type: new DataTypes.DATE
      }
    },
    {
      tableName: "Payers",
      timestamps: false,
      sequelize: database // this bit is important
    }
  );
  
  Payer.sync({ alter: false, force: false})