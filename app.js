import express from 'express'
const app = express()
import {PORT} from './config/index.js'
import logger from './middleware/logger.js'
import routes from './routes/index.js'
import cors from 'cors'

app.use(logger);
app.use(cors());

app.use(express.json());
app.use("/api/user", routes.user);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})