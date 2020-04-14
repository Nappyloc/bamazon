var mysql = require( 'mysql' )
var inquirer = require( "inquirer" );

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
    startBamazon()

} );

// funciton to start which returns all product information (console.table) Then start Dialoge

function startBamazon ()
{
    var query = "SELECT item_id, product_name, price  FROM products";
    connection.query( query, function ( err, res )
    {

        console.table( res );
        inquirer.prompt( [ {
            name: "productID",
            type: "input",
            message: "What is the item_id of the product you would like to purchase?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?"
        }
        ] ).then( function ( answer )
        {
            var product = answer.productID
            var quantity = parseInt( answer.quantity )
            console.log( "requested Quantity", quantity )

            // compare current quantity to requested purchase amount
            var query = "SELECT * FROM products WHERE ?";
            connection.query( query, { item_id: product }, function ( err, res )
            {
                console.log( res )
                var curQuant = parseInt( res[ 0 ].stock_quantity )
                var price = res[ 0 ].price
                console.log( "this the return ", curQuant, price )
                if ( curQuant >= quantity )
                {
                    completePurchase( curQuant, quantity, price );
                    connection.end();
                } else
                {
                    console.log( "Insuffiecent Quantity please select another item" )
                }
                startBamazon()

            } )
        } )














    } )

}


var completePurchase = function ( curQuant, quantity, price )
{
    // 
    var total = quantity * price
    console.log( "your total purchase is $", total )

    // update database with new quantity
    var newQuant = curQuant - quantity





}










// funciton to start dialogue

// check item quantity

// create order or return message


