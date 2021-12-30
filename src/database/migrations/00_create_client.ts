import { Knex } from "knex";  


export async function up(knex: Knex) {
    return knex.schema.createTable('client', table => {
        table.increments('id').primary();
        table.string('fullname').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
    });
}

export async function down( knex:Knex) {
    return knex.schema.dropTable('client');
}