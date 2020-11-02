module.exports = (sequelize, Sequelize) => {
  const Currency = sequelize.define('currencies', {
    name: {
    type: Sequelize.STRING
    },
    age: {
      type: Sequelize.INTEGER
    },
    active: {
    type: Sequelize.BOOLEAN, defaultValue: false
    },
  });

  return Currency;
}
