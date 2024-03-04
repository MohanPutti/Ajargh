import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

const Users = sequelize.define('Users', {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('BusinessOwner', 'User', 'Admin'),
    defaultValue: 'User'
  }
});

export default Users;
