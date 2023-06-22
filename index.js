const express = require("express");
const app = express();
const PORT = process.env.PORT || 4050;
const { DB_URL } = require('./config/config.json')
const mongoose = require("mongoose");
const alarmRoutes = require('./routes/alarm');
const bodyParser = require('body-parser');
const cors = require('cors')


mongoose.connect(
  DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("connected to db")
    app.use(cors());
    app.use(bodyParser.json({ limit: '16mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '16mb' }));
    app.use('/alarm', alarmRoutes);
    app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));
  }
  )
  .catch(error => {
    console.error("Failed to connect to DB", error);
    return process.exit(1);
  })

