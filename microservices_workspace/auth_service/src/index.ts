import ampq from "amqplib";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { connectToDb } from "./dbConnect";
import router from "./routes";

dotenv.config();

const app: express.Application = express();

const PORT = process.env.AUTH_SERVICE_PORT ?? 5006;

app.use(bodyParser.json());
app.use(cors());
app.use(router);

(async () => {
  try {
    await connectToDb();
    
    app.listen(PORT, () => {
      console.log(`Auth service has been started on ${PORT} port.`);
    });
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
})();
