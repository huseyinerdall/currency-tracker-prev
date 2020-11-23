'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $14AyarAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $14AyarAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$14AyarAltin',
    });
    return $14AyarAltin;
};