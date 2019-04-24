var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'bamazon'
});

connection.connect(function (err) {
    if (err) throw err;
    listProducts();
});

function runChoices() {
    inquirer
        .prompt({
            name: "action",
            type: 'list',
            message: "Choose an option",
            choices: [
                "List all available products",
                "Make a purchase",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "List all available products":
                    listProducts();
                    break;

                case "Make a purchase":
                    purchase();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
};


function listProducts() {
    let query = "select item_id, product_name, department_name, price, stock_quantity from products"
    connection.query(query, function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("item id: " +
                res[i].item_id +
                " || Product Name: " +
                res[i].product_name +
                " || department:" +
                res[i].department_name +
                " || price: " +
                res[i].price +
                " || Amount in stock: " +
                res[i].stock_quantity);
        };
        runChoices();
    });
};

function purchase() {
    inquirer.prompt([{
        name: "item",
        type: 'input',
        message: 'What product would you like to buy? Select product id: '
    },
    {
        name: "amount",
        type: 'input',
        message: "How many would you like to purchase?"
    }
    ]).then(function (answer) {
       console.log(answer.item, answer.amount);
        connection.query("select * from products where ?", { item_id: answer.item }, function (err, res) {

            if (res[0] == undefined) {
                console.log("This product does not exist, please select another.")
                runChoices();
            }
            else if (res[0].stock_quantity == 0) {
                console.log("We are currently out of " + res[0].product_name + ". Browse our other products!");
                runChoices();
            }
            else if (answer.amount <= 0) {
                console.log('Please enter a valid number to order');
                runChoices();
            }
            else if (res[0].stock_quantity < answer.amount) {
                console.log("We do not currently have enough of the product to ship to you!");
                runChoices();
            }
            else {
                console.log("you have purchased " + answer.amount + " of " + res[0].product_name +
                    " at a cost of " + (answer.amount * res[0].price) + ".");
                var updatedQuantity = (res[0].stock_quantity - answer.amount);
                connection.query("update products set ? where ?",
                    [{ stock_quantity: updatedQuantity }, { item_id: answer.item }],
                    function (err, res) {
                        runChoices();
                    });

            };

        });

    });
};