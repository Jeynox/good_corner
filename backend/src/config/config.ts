import { DataSource } from "typeorm";
import "../entities";

export const dataSources = new DataSource({
    type: "postgres",
    host: "db",
    username: "postgres",
    database: "postgres",
    password:"example",
    entities: ["src/entities/*.ts"],
    synchronize: true,
    logging: ["query", "error"],
});