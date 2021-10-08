'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Transaction.init({
    customerId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    quantity: DataTypes.INTEGER,
    total: DataTypes.DOUBLE,
    createdby: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};