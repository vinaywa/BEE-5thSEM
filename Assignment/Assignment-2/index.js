const fs = require('fs');
const username = process.argv[2];
const productname = process.argv[3];

function buyProduct(username, productname) {
    fs.readFile("user.txt", function (err, data) {
        if (err) {
            console.log("Error reading user.txt");
            return;
        }

        const users = JSON.parse(data);
        let found = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === username) {
                found = true;
                break;
            }
        }

        if (!found) {
            console.log("User not found");
            return;
        }

        fs.readFile("products.txt", function (err, data) {
            if (err) {
                console.log("Error reading products.txt");
                return;
            }

            const products = JSON.parse(data);
            let found = false;
            for (let i = 0; i < products.length; i++) {
                if (products[i].productName === productname) {
                    found = true;
                    break;
                }
            }

            if (!found) {
                console.log("Product does not exist");
                return;
            }

           
            fs.readFile("orderHistory.txt", "utf-8", function (err, data) {
                let history = [];

                if (!err && data !== "") {
                    history = JSON.parse(data);
                }

                history.push({
                    name: username,
                    product: productname
                });

                fs.writeFile("orderHistory.txt", JSON.stringify(history)+"\n", function (err) {
                    if (err) {
                        console.log("Error writing order history");
                        return;
                    }
                    console.log("Order placed successfully!");
                });
            });
        });
    });
}

buyProduct(username, productname);
