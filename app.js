const express = require('express')
const app = express()
const {PORT} = require("./config");
const logger = require("./middlewares/logger");

app.use(logger);

app.use(express.json());
app.use("/api/user", routes.user);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})