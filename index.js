const connectToMongo = require('./db');
const express = require('express')
connectToMongo();



const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());

app.use('/api/createuser', require('./routes/createuser'));
app.use('/api/update' , require('./routes/update'));
app.use('/api/show' , require('./routes/show'));
app.use('/api/delete' , require('./routes/delete'));



app.listen(port, () => {
  
  console.log(`Example app listening on port http://localhost:${port}`)
})
