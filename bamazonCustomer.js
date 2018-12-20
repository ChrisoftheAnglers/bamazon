var mysql = require("mysql");
var inquirer = require("inquirer");

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
    connection.query("SELECT * FROM products", function(error, results) {
        if (error) throw error;
        console.log(results);
    })
    connection.end();
})