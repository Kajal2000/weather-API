var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'NAVGURUKUL1',
    database: 'weather_api'
  },
  useNullAsDefault: true
});
module.exports = knex;

knex.schema.hasTable("data").then((exists) => {
  if (!exists){
    return knex.schema.createTable('data', (table) => {
      table.increments('weatherId')
      table.string('id')
      table.string('cityName')
      table.string('weatherDescription')
      table.string('weatherMain')
      table.string('date')
    })
    .catch((err) => { 
      console.log(err); throw err 
    })
  }
  return console.log("table is created!")
})
  