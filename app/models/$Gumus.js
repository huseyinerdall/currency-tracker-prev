'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $Gumus extends Model {
        static associate(models) {
            // define association here
        }
    };
    $Gumus.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$Gumus',
    });
    return $Gumus;
};