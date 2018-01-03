exports.up = function(knex, Promise) {
  return knex.schema.createTable('sites', function(table) {
    table.increments();
    table.string('name');
    table.string('url');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('sites');
};
