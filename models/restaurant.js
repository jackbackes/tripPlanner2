var Sequelize = require('sequelize');
var Place = require('./place');
var db = require('./index');


var Restaurant = db.define('restaurant', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cuisine: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        validate: {
          min: 1,
          max: 5
        }
    }
});

Restaurant.belongsTo(Place);

module.exports = Restaurant;