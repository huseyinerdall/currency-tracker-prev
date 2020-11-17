'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Bitcoin extends Model {
        static associate(models) {
            // define association here
        }
    };
    Bitcoin.init({
        Fiyat: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Bitcoin',
    });
    return Bitcoin;
};