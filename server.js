import express from "express";
import data from "./data.js";

const app = express();

app.get('/api/products', (req,res) => {
res.send(data.products)
});

const port = process.env.PORT || 5000 //free access sa mga free ports
app.listen(port, () =>{
    console.log(`serve at http://localhost:${port}`)
}) //server starts ready for response from frontend
