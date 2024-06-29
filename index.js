const express = require('express');

const userRouter = require("./routes/user.route")
const productRouter = require("./routes/products.route")
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(userRouter);
app.use(productRouter);


app.use((req, res, next)=>{
    res.status(404).json({
        message: "Data Not Found 404"
    })
});

app.use((err, req, res, next)=>{
    res.status(500).send("<h1>Something is Broken</h1>")
})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`)
})