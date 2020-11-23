'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $TamAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $TamAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$TamAltin',
    });
    return $TamAltin;
};