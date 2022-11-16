// Se establece la conexion a Postgres utilizando el paquete 'pg'
// y un Pool de conexiones
const { Pool } = require('pg');

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "123MeineTochter!",
    database: "db_gateway",
    port: '5433'
});

const createGateway = ( req, res) => {
    //const response =  pool.query( 'INSERT INTO gateway (serial_number, human_readable, ipv4_address, id ,published) VALUES ("YUT", "POIL" , "DASLEBEN" , 2 ,true )' );
    console.log(req.body);
    res.send('gateway creada');
}

const listGateway = async (req, res) => {
   const response = await pool.query( 'SELECT * FROM gateway' );
   res.status(200).json(response.rows);
//    console.log(response.rows);
//    res.send('users');
}



module.exports = {
    createGateway,
    listGateway
}