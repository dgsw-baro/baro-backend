import * as express from "express";
import * as cors from "cors";
import api from "./api";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(api);

export default app;
