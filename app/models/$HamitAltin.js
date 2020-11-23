'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $HamitAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $HamitAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$HamitAltin',
    });
    return $HamitAltin;
};