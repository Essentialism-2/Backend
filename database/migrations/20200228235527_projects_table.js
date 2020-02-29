
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();

             //foreign key
             tbl.integer('user_id')
             .unsigned()
             .notNullable()
             .references('id')
             .inTable('users')
             .onDelete('RESTRICT')
             .onUpdate("CASCADE")

             tbl.string('name', 128)
                .index()
                .notNullable()

            tbl.string('description', 256)

        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects');
};
