// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./database/node-auth3-project.db"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
