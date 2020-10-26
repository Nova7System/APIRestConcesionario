
const config = {
    user :'sa',
    password :'12345',
    server:'127.0.0.1',
    database:'Concesionario',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 61865
}

module.exports = config; 