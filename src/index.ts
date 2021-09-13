import { Connection, createConnection } from "typeorm";
import * as http from "http";
import app from "./app";

import config from "./config";

const { PORT } = config;

export const getConnection = async (): Promise<Connection> => {
  const connection = await createConnection();
  console.log("DB connection");
  return connection;
};

getConnection().then(() => {
  http.createServer(app).listen(PORT, () => {
    console.log(
      `Server is listening on port ${PORT}... (${process.env.NODE_ENV})`
    );
  });
});
