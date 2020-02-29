
exports.up = function(knex) {
    return knex.schema
        .createTable('projects_values', tbl => {
            tbl.primary(['project_id','values_id'])

        //foreign key
        tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('projects')
        .onDelete('RESTRICT')
        .onUpdate("CASCADE")


        //foreign key
        tbl.integer('values_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('values')
        .onDelete('RESTRICT')
        .onUpdate("CASCADE")

        tbl.boolean('relevant')
            .defaultTo(false)
            .notNullable()

        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projects_values');
};
