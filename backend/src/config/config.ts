import { DataSource } from "typeorm";
import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";
import { Picture } from "../entities/Picture";
import { Tag } from "../entities/Tag";

export const dataSources = new DataSource({
    type: "postgres",
    host: "db",
    username: "postgres",
    database: "postgres",
    password:"example",
    entities: [Ad, Category, Picture, Tag],
    synchronize: true,
    logging: ["query", "error"],
});