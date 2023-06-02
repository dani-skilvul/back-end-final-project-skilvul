'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tips.init(
    {
      judul: DataTypes.STRING,
      isi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Tips',
      timestamps: false,
    }
  );
  return Tips;
};
