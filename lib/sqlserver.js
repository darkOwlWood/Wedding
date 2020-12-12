const sql = require('mssql')
const config = {
    user:     'DB_A6A658_InvitacionWeb_admin',
    password: 'LuisDaniel93',
    server:   'SQL5097.site4now.net',
    database: 'DB_A6A658_InvitacionWeb',
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, poolPromise
}