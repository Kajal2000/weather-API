var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'Kajal@123',
      database: 'weather_api_details'
    }
  });
  module.exports = knex;
  
knex.schema.createTable('data', (table) => {
  if ('!exists'){
    return knex.schema.createTable('data', (table) => {
      table.increments('id')
      table.string('cityName')
      table.string('country')
      table.string('sunrise')
      table.string('sunset')
      table.string("Date")
    })
    .catch((err) => { 
      console.log(err)
    })
  }
  return console.log("table is created!")
})    
