// models/Listing.js

import { DataTypes } from 'sequelize';
import sequelize from '../../config/sequelize.js';

/**
 * Listings schema
 */
const Listings = sequelize.define('Listings', {
  listing_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Listings;
