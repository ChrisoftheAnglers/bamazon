var mysql = require("mysql");
var inquirer = require("inquirer");

// Function to update product stock
function updateStock(sold, item) {
    var changeInStock = item.stock_quantity - sold.amount;
    var query = connection.query("UPDATE products SET ? WHERE ?", [
        {
            stock_quantity: changeInStock
        },
        {
            item_id: item.item_id
        }
    ],
    function(err, res) {
        console.log(res.affectedRows + " item updated");
        console.log("We now have " + changeInStock + " " + item.product_name + " left");
        connection.end();
    });
}

// Initialize connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
})

// Prompt the user to select the product they wish to buy (with ID included)
// But only after a connection has been established and data has been pulled from SQL
connection.connect(function(error) {
    if (error) throw error;
    connection.query("SELECT * FROM products", function(error, products) {
        if (error) throw error;

        // Variables to store name and id from sql base and use it with inquirer (name and value for list choices)
        var item_names = [];
        for (i=0; i<products.length; i++) {
            item_names.push({name: products[i].product_name, value: products[i].item_id});
        }
        console.log(item_names);
        inquirer.prompt({
            message: "What would you like to purchase?",
            type: "list",
            name: "itemId",
            choices: item_names
        }).then(function(response) {
            var currentItem = products.find(function(item) {
                return item.item_id === response.itemId;
            }); // Stores the chosen product info in a variable
            console.log(response.itemId);
            console.log("The item you chose costs: $" + currentItem.price);
            console.log("There are " + currentItem.stock_quantity + " in stock");
            inquirer.prompt({
                message: "How much of these items would you like?",
                type: "input",
                name: "amount",
                validate: function(value) {
                    if (isNaN(value)) return "Please enter a valid number";
                    else if (value > currentItem.stock_quantity || value < 1) return "We do not have the requested amount of that item"
                    else return true;
                }
            }).then(function(sold) {
                var totalPrice = currentItem.price * sold.amount;
                console.log("The total cost of your purchase is " + totalPrice);
                updateStock(sold, currentItem);
            });
        });
    });
});