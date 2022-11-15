module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123MeineTochter!",
  DB: "db_gateway",
  dialect: "postgres",
  // PORT: '8080', 
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
};