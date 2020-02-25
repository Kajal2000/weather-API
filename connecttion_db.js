var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'NAVGURUKUL1',
      database: 'weather_api_details'
    },
    useNullAsDefault: true
  });
  module.exports = knex;
  
knex.schema.createTable('data', (table) => {
    table.increments('weatherId')
    table.string('id')
    table.string('cityName')
    table.string('country')
    table.string('sunrise')
    table.string('sunset')
      })
      .catch((err) => { 
        console.log(err); throw err 
      })
    
    return console.log("table is created!")
  })
    
