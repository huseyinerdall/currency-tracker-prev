'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $BesliAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $BesliAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$BesliAltin',
    });
    return $BesliAltin;
};