const Pool = require('pg').Pool;
const pg_conn = new Pool (
    {
        user:'bgcpchkoqfwnuf',
        password:'a88d6467b9c67ac70998828795c0e6d9a63f8177d10a4a8824f36f63ed5aa9e4',
        host:'ec2-52-204-157-26.compute-1.amazonaws.com',
        database:'dfgs8crhs1lsf5',
        port:5432,
        ssl: {
            rejectUnauthorized: false
        },
    });

module.exports = pg_conn;