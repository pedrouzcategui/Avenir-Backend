import { DataTypes } from "sequelize";
import db from "../db";

export const OperationModel = db.define(
  "Operation",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: DataTypes.DATE,
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
