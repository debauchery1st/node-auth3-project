exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl
      .string("username", 256)
      .unique()
      .notNullable();
    tbl.string("password", 256).notNullable();
    tbl.string("department", 256);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
