import express, { json, urlencoded } from "express";
import { indexRoute } from "./routes";
const app = express();

app.use(json()); //Parse URL-encoded bodies
app.use(urlencoded({ extended: true }));
app.use("/", indexRoute);

app.listen(8080, () => {
  console.log("app is listening on PORT 8080");
});
