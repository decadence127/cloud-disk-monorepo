import ampqlib, { Channel, Connection } from "amqplib";
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

export let channel: Channel, connection: Connection;

async function connectToRabbitMQ() {
  const ampqServer = "amqp://rabbitmq:5672";
  connection = await ampqlib.connect(ampqServer);
  channel = await connection.createChannel();
  await channel.assertQueue("auth");
}

(async () => {
  try {
    await connectToDb();
    await connectToRabbitMQ();
    app.listen(PORT, () => {
      console.log(`Auth service has been started on ${PORT} port.`);
    });
  } catch (e) {
    console.error(e);
    process.exit(-1);
  }
})();
