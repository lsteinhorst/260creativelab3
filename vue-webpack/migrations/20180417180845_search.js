
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.raw("alter table comments add fulltext(comment)"),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.raw("alter table comments drop index comment"),
  ]);
};
