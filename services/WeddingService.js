const { poolPromise } = require('../lib/sqlserver');
const mssql = require('mssql');

class WeddingService{
    constructor(){
    }

    async setCheckInGuest(code){
        let data = '';
        const pool = await poolPromise;
        const resultId = await pool.request()
                            .input('code',mssql.NVarChar,code)
                            .query('SELECT id FROM [Invitacion].[Invitacion] WHERE code=@code');

        if(resultId.recordset.length!==0){
            const id = resultId.recordset[0].id;
            await pool.request()
                        .input('estatus', mssql.Int, 4)
                        .input('id', mssql.Int, id)
                        .query('UPDATE [Invitacion].[Invitacion] SET idEstado=@estatus WHERE id=@id')
                        
            const resultUserData = await pool.request()
                                        .input('id', mssql.Int, id)
                                        .query('SELECT Nombre, Tickets, Mesa FROM [Invitacion].[Invitacion] WHERE id=@id')
            data = { resp: resultUserData.recordset };
        }else{
            data = {
                resp: 'No se encotraro invitados para este codigo'
            }
        }
            
        return data;
    }

    async getAllChekedGuests(){
        const pool = await poolPromise;
        const resultData = await pool.request()
                            .query('SELECT Nombre, Tickets, Mesa FROM [Invitacion].[Invitacion] WHERE idEstado=4');
        return { resp: resultData.recordset }
    } 

    async getAllPendingsGuests(){
        const pool = await poolPromise;
        const resultData = await pool.request()
                            .query('SELECT Nombre, Tickets, Mesa FROM [Invitacion].[Invitacion] WHERE idEstado<>4');
        return { resp: resultData.recordset }
    }

    async setManuallyGuest(id){
        const pool = await poolPromise;
        const resultUserData = await pool.request()
                                    .input('estatus', mssql.Int, 4)
                                    .input('id', mssql.Int, id)
                                    .query('UPDATE [Invitacion].[Invitacion] SET idEstado=@estatus WHERE id=@id')
        return { resp: resultUserData.rowsAffected };
    }

}

module.exports = WeddingService;