
exports.up = function(knex) {
    return knex.schema
    .table('users', tbl => {
        tbl.renameColumn('username', 'email')

        tbl.string('name', 128)
            .notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema
        .table('users', tbl => {
            tbl.dropColumn('name')

            tbl.renameColumn('email', 'username')
        })
};
