const sequelize = require('../../back/db');
const { Sequelize } = require('sequelize');
const User = require('../../back/models/user')(sequelize, Sequelize.DataTypes);

const seedAdminData = async () => {
  try {
    await sequelize.sync({ force: true }); // Sincroniza la base de datos y elimina las tablas existentes
    console.log('Base de datos sincronizada');

    // Crear un usuario admin
    const adminUser = {
      username: 'Ciroadmin',
      email: 'admin@example.com',
      password: 'admin123', // Asegúrate de encriptar la contraseña en un entorno real
      preference: 'default',
      isAdmin: true,
      ban: false
    };

    // Insertar el usuario admin en la base de datos
    await User.create(adminUser);
    console.log('Usuario admin creado:', adminUser.username);
    
  } catch (error) {
    console.error('Error al crear el usuario admin:', error);
  } finally {
    await sequelize.close(); // Cerrar la conexión
  }
};

seedAdminData();