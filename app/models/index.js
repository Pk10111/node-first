const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig?.HOST,
  port: dbConfig?.PORT,
  dialect: dbConfig?.dialect,
  pool: {
    max: dbConfig.pool?.max || 5,
    min: dbConfig.pool?.min || 0,
    acquire: dbConfig.pool?.acquire || 30000,
    idle: dbConfig.pool?.idle || 10000,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync();

db.user = require("./users.model")(sequelize, Sequelize);

module.exports = db;
