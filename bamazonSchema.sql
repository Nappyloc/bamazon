DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamzaon;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(200) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price float(8,2),
stock_quantity INTEGER NOT NULL,
PRIMARY KEY(item_id)
);


