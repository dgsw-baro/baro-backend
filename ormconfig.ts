import config from "./src/config";

export default {
  type: "mysql",
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USERNAME,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  synchronize: config.DB_SYNCHRONIZE,
  logging: config.DB_LOGGING,
  entities: ["src/entity/**/*.ts"],
};
