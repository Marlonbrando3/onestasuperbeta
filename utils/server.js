const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const propertiesRouter = require('../routes/properties')

// const bodyParser = require('body-parser')
// const mainpageRouter = require('./routes/mainpage')
// const newpropertyRouter = require('./routes/newproperty')
// const connectFtpRouter = require('./routes/ftp')

require('dotenv/config');
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}))

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI,
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(()=>console.log("Connected with MongoDB"))
.catch((err) => console.log(err))


app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.use(propertiesRouter);
// app.use(mainpageRouter);
// app.use(newpropertyRouter);
// app.use(connectFtpRouter);


app.listen(3001, () => {
    console.log("Server is running at port 3001");
  });

