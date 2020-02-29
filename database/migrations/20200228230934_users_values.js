
exports.up = function(knex) {
    return knex.schema
        .createTable('users_values', tbl => {
            tbl.primary(['user_id', 'value_id']);

             //foreign key
            tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate("CASCADE")

            //foreign key
            tbl.integer('value_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('values')
            .onDelete('RESTRICT')
            .onUpdate("CASCADE")

            tbl.boolean('top_three')
                .default(false)
                .notNullable()

            tbl.string('description', 256)
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users_values');
};
