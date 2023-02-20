const express = require('express')
const app = express()
const {PORT} = require("./config");
const logger = require('./middleware/logger')
const routes = require("./routes");
const cors = require("cors");

app.use(logger);
app.use(cors());

app.use(express.json());
app.use("/api/user", routes.user);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})