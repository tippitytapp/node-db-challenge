// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: 'ec2-52-44-55-63.compute-1.amazonaws.com',
      database: 'd6b0ali1u4rrpg',
      user:     'mkrwmimwjxqbsy',
      password: 'f11a396cdf8732ffbeda052ff552ae75169234a4ca0904cd29d08b2c21a62e17'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:'./data/migrations'
    },
    seeds:{
      directory: "./data/seeds"
    }
  }

};
