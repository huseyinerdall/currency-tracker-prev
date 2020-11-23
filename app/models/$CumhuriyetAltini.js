'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $CumhuriyetAltini extends Model {
        static associate(models) {
            // define association here
        }
    };
    $CumhuriyetAltini.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$CumhuriyetAltini',
    });
    return $CumhuriyetAltini;
};