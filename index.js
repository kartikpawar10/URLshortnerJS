import express, { json } from "express";
import router from "./routes/url.js";
const app = express();
const PORT = 5000;
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server is Listening on "${PORT}"`);
});
