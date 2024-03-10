const express = require('express');
const { connectMongoDB } = require('./connect')
const urlRoute = require('./routes/url');
const URL = require('./models/url');
const app = express();
const PORT = 8080


const connectionSuccess = connectMongoDB("mongodb://127.0.0.1:27017/urlynkDatabase")

connectionSuccess.then(
  () => { console.log("Database connection succesfull") }
)

app.use(express.json())

app.use('/url', urlRoute)

app.get('/:shortId' , async(request , response) => {
  const shortId = request.params.shortId;
  await URL.findOneAndUpdate(
    {
      shortId
    },{push : (
      
    )}
  )
  
})
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})


