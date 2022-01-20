require("dotenv").config();
const Pool = require("pg").Pool;

const devConfig = {
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  database: process.env.PG_DB,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, ///heroku addon
};

module.exports = new Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);