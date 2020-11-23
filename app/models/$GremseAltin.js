'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class $GremseAltin extends Model {
        static associate(models) {
            // define association here
        }
    };
    $GremseAltin.init({
        Alis: DataTypes.STRING,
        Satis: DataTypes.STRING,
    }, {
        sequelize,
        modelName: '$GremseAltin',
    });
    return $GremseAltin;
};