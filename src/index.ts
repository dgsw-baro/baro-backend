import { Connection, createConnection } from "typeorm";
import * as http from "http";
import app from "./app";

import config from "./config";

const { PORT } = config;

export const getConnection = async (): Promise<Connection> => {
  try {
    const connection = await createConnection();
    console.log("db connection");
    return connection;
  } catch (e) {
    console.log("error " + e);
  }
};

http.createServer(app).listen(PORT, () => {
  console.log(
    `Server is listening on port ${PORT}... (${process.env.NODE_ENV})`
  );
});
