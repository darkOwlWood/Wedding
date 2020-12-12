const mssql = require('mssql');

const config = {
    user:     'DB_A6A658_InvitacionWeb_admin',
    password: 'LuisDaniel93',
    server:   'SQL5097.site4now.net',
    database: 'DB_A6A658_InvitacionWeb',
}

mssql.connect(config, (err) => {
    if(err){
        console.log(err);
        return;
    }

    const request = new mssql.Request();
    request.input('status', mssql.Int, 4);
    request.query('UPDATE [Invitacion].[Invitacion] SET IdEstado=@status WHERE id=11',(err, record) => {
        if(err){
            console.log(err);
            return;
        }
    
        console.log(JSON.stringify(record.rowsAffected));
    })
});

