const path = require("path");
require("dotenv").config();

const {
  DEVELOPMENT_DATABASE_URL = "postgresql://postgres@localhost/postgres",
  PRODUCTION_DATABASE_URL = "postgresql://postgres@localhost/postgres"
} = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DEVELOPMENT_DATABASE_URL,
      ssl: { rejectUnauthorized: false }  // Enable SSL and disable certificate verification
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  production: {
    client: "postgresql",
    connection: {
      connectionString: PRODUCTION_DATABASE_URL,
      ssl: { rejectUnauthorized: false }  // Enable SSL for production
    },
    pool: { min: 0, max: 5 },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },

  test: {
    client: "sqlite3",
    connection: {
      filename: ":memory:",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
    useNullAsDefault: true,
  },
};