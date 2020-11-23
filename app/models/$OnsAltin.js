'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $OnsAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $OnsAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$OnsAltin',
    });
    return $OnsAltin;
};