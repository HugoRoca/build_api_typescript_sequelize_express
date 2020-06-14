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
      createdAt: {
        type: new DataTypes.DATE,
        field: 'date_created'
      },
      updatedAt: {
        type: new DataTypes.DATE,
        field: 'date_last_updated'
      }
    },
    {
      tableName: "Payers",
      timestamps: true,
      underscored: true,
      sequelize: database // this bit is important
    }
  );
  
  Payer.sync({ alter: false, force: false})