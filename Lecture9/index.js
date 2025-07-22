const express = require('express');
const fs = require('fs');
const app = express();
const port = 4006;

app.use(express.json());

app.post("/blog", (req, res) => {
    const name = req.body.name;
    const className = req.body.class;
   

    fs.readFile("demo.txt", "utf-8", function (err, data) {
        let arr = [];

        if (!err && data!="") {
           arr=JSON.parse(data)
        }

        arr.push({
            name: name,
            class: className
        });
   
        fs.writeFile("demo.txt", JSON.stringify(arr), function (err) {
            if (err) {
                console.log(err)
                return;
            }
            res.json({ message: "Done", data: arr });
        });
    });
});



app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
