import express from "express";
import cors from "cors";

const app: express.Application = express();

const PORT = process.env.AUTH_SERVICE_PORT ?? 5006;

app.use(cors());

app.listen(PORT, () => {
  console.log(`Auth service has been started on ${PORT} port.`);
});
