// Update with your config settings.
require('dotenv').config();
const dbpassword = process.env.PASS;

module.exports = {

  development2: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/projects.db3'
    },
    pool: {
      afterCreate: (conn, done)=>{
        conn.run('PRAGMA foreign_keys = ON', done)
      }
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: "postgres://mkrwmimwjxqbsy:f11a396cdf8732ffbeda052ff552ae75169234a4ca0904cd29d08b2c21a62e17@ec2-52-44-55-63.compute-1.amazonaws.com:5432/d6b0ali1u4rrpg",
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
  development: {
    client: 'pg',
    connection: "postgres://mkrwmimwjxqbsy:f11a396cdf8732ffbeda052ff552ae75169234a4ca0904cd29d08b2c21a62e17@ec2-52-44-55-63.compute-1.amazonaws.com:5432/d6b0ali1u4rrpg",
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },
};
