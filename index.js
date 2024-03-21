const express = require("express")
const mongoose = require("mongoose")
const PORT = 1234
const app = express() // initialization of the Express Server

//parsing application
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));


app.get('/', (request, response) => {
    response.send(`
        <h1>UrLynk</h1>
    `)
})

app.get('/home', (request, response) => {

})

app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})