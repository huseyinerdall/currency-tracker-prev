'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $22AyarBilezik extends Model {
        static associate(models) {
            // define association here
        }
    };
    $22AyarBilezik.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$22AyarBilezik',
    });
    return $22AyarBilezik;
};