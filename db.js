const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_7mf2', // Database name
  'clouduser', // User
  'FdT8vETfhdeMmCJJzjUjazAbMJws9tOn', // Password
  {
    host: 'dpg-ck9d0h9ehpqs73c3id8g-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
