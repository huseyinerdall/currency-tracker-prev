'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $YarimAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $YarimAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$YarimAltin',
    });
    return $YarimAltin;
};