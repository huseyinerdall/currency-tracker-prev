'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $GramAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $GramAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$GramAltin',
    });
    return $GramAltin;
};