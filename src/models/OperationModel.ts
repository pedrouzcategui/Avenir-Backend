import { DataTypes } from "sequelize";
import db from "../db";

export const OperationModel = db.define(
  "Operation",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: crypto.randomUUID(),
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    transferAccountId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "income",
    },
    amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: "Operations",
  }
);
