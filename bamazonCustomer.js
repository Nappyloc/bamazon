var mysql = require( 'mysql' )
// create the connection information for the sql database
var connection = mysql.createConnection( {
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Eliking2014",
    database: "bamazon"
} );


// Connect to the datbase
connection.connect( function ( err )
{
    if ( err ) throw err;
    console.log( "connected as id " + connection.threadId + "\n" );

} );

// funciton to start which returns all product information (console.table) Then start Dialoge

// funciton to start dialogue

// check item quantity

// create order or return message


