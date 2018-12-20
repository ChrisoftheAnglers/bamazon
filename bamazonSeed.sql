DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT(10) NOT NULL,
    PRIMARY KEY(item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Galloshes", "Shoes 'n Stuff", 999.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Boots", "Shoes 'n Stuff", 499.99, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Sandals", "Shoes 'n Stuff", 49.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Smash Bros Ultimate", "Vidya Games", 999999.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Fallout 76", "Vidya Games", 0.00, 1000000000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Ride to Hell: Retribution", "Vidya Games", -99.99, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Tub of Nitroglycerine", "Fun explody stuff", 20.00, 500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Sticks of Dynamite", "Fun explody stuff", 10.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Nuclear Launch codes", "Fun explody stuff", 0.05, 666);