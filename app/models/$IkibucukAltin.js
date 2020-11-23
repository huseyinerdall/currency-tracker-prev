'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $IkibucukAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $IkibucukAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$IkibucukAltin',
    });
    return $IkibucukAltin;
};