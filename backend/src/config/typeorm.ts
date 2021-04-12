import {createConnection} from 'typeorm'
import enviroment from './enviroment'
import path from 'path'

export async function connect(){
    await createConnection({
        type: 'mysql',
        host: enviroment.databaseHost,
        port: enviroment.databasePort,
        username: enviroment.databaseUserName,
        password: enviroment.databasePassword,
        database: enviroment.databaseName,
        entities: [
            path.join(__dirname, '../entities/**/**.ts')
        ], 
        synchronize:true
    });
    console.log('Database is connected');
}