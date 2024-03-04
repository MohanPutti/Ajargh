// models/Listing.js

import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

/**
 * Replies schema
 */
const Replies = sequelize.define('Replies', {
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  text: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Replies;
