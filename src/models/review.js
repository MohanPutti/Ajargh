// models/Review.js

import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

/**
 * Reviews schema
 */
const Reviews = sequelize.define('Reviews', {
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  listing_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: true // Assuming rating is optional
  }
});
export default Reviews;
