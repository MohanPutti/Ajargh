import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'ajargh',
  password: 'ajargh123$',
  database: 'ajargh',
  define: {
    freezeTableName: true,
    timestamps: false,
  }
});

export default sequelize;