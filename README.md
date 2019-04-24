# bamazon

Bamazon is a node based app made for making purchases from a database store. It utilized mysql for setting up database connection, and inquirer for a menu system.

On running the first time, all products will be listed, including their: id, product name, department, price, and amount in stock

The menu will then allow you to select either to list all available products, make a purchase, or exit the program.

Selecting list all available products will query the database for current data on what is available, and print it out to the screen.

Selecting make a purchase will further prompt you to select a product id, and after that how many of that product id you would like to purchase.

If the id does not exist, you will be returned to the main choice menu.

If there is currently no stock left of a product, you will be informed and brought back to the main menu.

If the amount is less than or equal to zero, you will be asked to enter a valid number and brought back to the main menu.

If you try to order more than the amount currently available, you will be informed and returned to the main menu.

If everything is ok, you will be informed of how many you purchased of what at what total cost, and then returned back to the main menu.