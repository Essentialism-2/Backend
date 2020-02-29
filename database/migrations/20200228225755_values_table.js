
exports.up = function(knex) {
    return knex.schema
        .createTable('values', tbl => {
            tbl.increments();

            tbl.string('name', 128)
                .index()
                .notNullable()
                .unique()

            tbl.string('description', 256)
        })
};

exports.down = function(knex) {
    return knex.schema 
        .dropTableIfExists('values');
};
