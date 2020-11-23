'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $ResatAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $ResatAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$ResatAltin',
    });
    return $ResatAltin;
};