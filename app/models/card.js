const { DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize');

class Card extends Model {};

Card.init({
    name: DataTypes.TEXT,
    content: DataTypes.TEXT,
    position: DataTypes.INTEGER,
    list_id: DataTypes.INTEGER,
}, {
    sequelize,
    tableName: 'card',
});

module.exports = Card;