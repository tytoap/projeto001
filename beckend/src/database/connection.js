const knex = require('knex');
const configuration = require('../../knexfile');

const conneciton = knex(configuration.development);

module.exports = conneciton;