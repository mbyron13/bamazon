DROP DATABASE IF EXISTS bamazon;
Create Database bamazon;
use bamazon;
drop table if exists products;

create table products(
item_id int NOT NULL AUTO_INCREMENT,
Primary Key(item_id),
product_name varchar(100) NOT NULL,
department_name varchar(50),
price decimal(6,2) NOT NULL,
stock_quantity int NOT NULL
);

insert into products(product_name, department_name, price, stock_quantity) values ("widget","misc",9.99,1750);
insert into products(product_name, department_name, price, stock_quantity) values ("kindle","electronics",120.50,2362);
insert into products(product_name, department_name, price, stock_quantity) values ("belt buckle","clothing",15.99,463);
insert into products(product_name, department_name, price, stock_quantity) values ("boxing gloves","sports",28.30,142);
insert into products(product_name, department_name, price, stock_quantity) values ("the gem of cyttorak","super power",9999.99,1);
insert into products(product_name, department_name, price, stock_quantity) values ("adamantium skeleton","body modification",8790.60,1);
insert into products(product_name, department_name, price, stock_quantity) values ("heaphones","electronics",38.97,379);
insert into products(product_name, department_name, price, stock_quantity) values ("screwdriver","tools",13.89,700);
insert into products(product_name, department_name, price, stock_quantity) values ("pillow","home decor",18.25,825);
insert into products(product_name, department_name, price, stock_quantity) values ("shoes","clothing",115.29,400);


