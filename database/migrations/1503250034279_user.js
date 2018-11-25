'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
    up() {
        this.create('users', table => {
            table.increments();
            table
                .string('username', 80)
                .notNullable()
                .unique();
            table
                .string('email', 254)
                .notNullable()
                .unique();
            table.string('first_names', 30).notNullable();
            table.string('last_names', 30).notNullable();
            table.string('phone', 10).notNullable();
            table.string('password', 60).notNullable();
            table.timestamps();
        });
    }

    down() {
        this.drop('users');
    }
}

module.exports = UserSchema;
