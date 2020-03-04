'use strict'

const Env = use('Env')

module.exports = {
  connection: Env.get('KUE_CONNECTION', 'local'),

  /*
  |--------------------------------------------------------------------------
  | local connection config
  |--------------------------------------------------------------------------
  |
  | Configuration for a named connection.
  |
  */
  local: {
    host: '127.0.0.1',
    port: 6379,
    password: null,
    db: 0,
    keyPrefix: ''
  },

  /*
|--------------------------------------------------------------------------
| cluster config
|--------------------------------------------------------------------------
|
| Below is the configuration for the redis cluster.
|
*/
  cluster: {
    clusters: [
      {
        host: '127.0.0.1',
        port: 6379,
        password: null,
        db: 0
      },
      {
        host: '127.0.0.1',
        port: 6380,
        password: null,
        db: 0
      }
    ]
  }
}
