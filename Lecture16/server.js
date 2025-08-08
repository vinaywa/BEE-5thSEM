const express = require('express')
const app = express()

app.use(express.static(__dirname + "/public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true })) 

let PORT = 3000;

app.post("/user", (req, res) => {
    try {
        const data = req.body;
        console.log(data.email);
        console.log(data.pswd);
        
        // Destructure email and pswd from data
        const { email, pswd } = data;

        res.json({
            message:"user added successfully",
            data: {
                email,
                pswd
            }
        })
    }
    catch (err) {
        res.json({
            success: false,
            message: err.message
        })
    }
})


app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
})
