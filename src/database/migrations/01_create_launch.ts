import { Knex } from "knex";  


export async function up(knex: Knex) {
    return knex.schema.createTable('launch', table => {
        table.increments('id').primary();
        table.boolean('amount').notNullable();
        table.string('title_launch').notNullable();
        table.string('type_launch').notNullable();
        table.date('date').notNullable();
        table.string('client_id')
        .notNullable()
        .references('id')
        .inTable('client');
    });
}

export async function down( knex:Knex) {
    return knex.schema.dropTable('launch');
}