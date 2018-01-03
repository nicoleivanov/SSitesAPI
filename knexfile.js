// Update with your config settings.
const {
  POSTGRES_DB: database,
  POSTGRES_USER: user,
  POSTGRES_PASSWORD: password,
  POSTGRES_PORT: port,
  POSTGRES_HOST: host,
} = process.env;

module.exports = {
  client: 'postgresql',
  connection: {
    host,
    database,
    user,
    password,
    port,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
