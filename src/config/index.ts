import * as dotenv from "dotenv";
import * as path from "path";

if (process.env.NODE_ENV === "production") {
  dotenv.config({ path: path.join(__dirname, "../../.env.production") });
} else if (process.env.NODE_ENV === "development") {
  dotenv.config({ path: path.join(__dirname, "../../.env.development") });
}

const loadEnv = (key: string): string => {
  const value = process.env[key];

  if (value === undefined) {
    throw new Error(`environment ${key} is not defined`);
  }

  return value;
};

export default {
  PORT: loadEnv("PORT"),
  DB_HOST: loadEnv("DB_HOST"),
  DB_PORT: loadEnv("DB_PORT"),
  DB_USERNAME: loadEnv("DB_USERNAME"),
  DB_PASSWORD: loadEnv("DB_PASSWORD"),
  DB_SYNCHRONIZE: loadEnv("DB_SYNCHRONIZE"),
  DB_LOGGING: loadEnv("DB_LOGGING"),
  DB_NAME: loadEnv("DB_NAME"),
  DODAM_ID: loadEnv("DODAM_ID"),
  DODAM_SECRET: loadEnv("DODAM_SECRET"),
};
