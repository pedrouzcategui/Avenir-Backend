import { Sequelize } from "sequelize";

const db = new Sequelize("avenir", "postgres", "postgres", {
  host: "localhost",
  dialect: "postgres",
});

export default db;
