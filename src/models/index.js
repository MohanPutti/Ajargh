/**
 * syncing the databases
 */
import sequelize from "../../config/sequelize.js";
import Users from "./user.js";

Users.sync();