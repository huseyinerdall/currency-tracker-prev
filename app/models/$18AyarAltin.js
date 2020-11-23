'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $18AyarAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $18AyarAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$18AyarAltin',
    });
    return $18AyarAltin;
};