import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { z } from "zod";
dotenv.config();

const envSchema = z.object({
	AGENDA_URL: z.string(),
	DB_URL: z.string(),
});

export const env = envSchema.parse(process.env);

const mongoClient = new MongoClient(env.DB_URL);

export const db = mongoClient.db("offerly");
