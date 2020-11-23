'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $CeyrekAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $CeyrekAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$CeyrekAltin',
    });
    return $CeyrekAltin;
};