'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $AtaAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $AtaAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$AtaAltin',
    });
    return $AtaAltin;
};