'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mangas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  mangas.init({
    title: DataTypes.STRING,
    thumb: DataTypes.TEXT,
    type: DataTypes.STRING,
    endpoint: DataTypes.STRING,
    last_chapter: DataTypes.STRING,
    deleted_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'mangas',
    underscored: true,
  });
  return mangas;
};