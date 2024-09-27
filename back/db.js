require('dotenv').config();
const { Sequelize } = require('sequelize');
const DATABASE_URL = 'postgres://postgres:191213@localhost:5432/ShoeSportDB';

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  /*dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }*/
});

sequelize.authenticate()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
  });

module.exports = sequelize;

