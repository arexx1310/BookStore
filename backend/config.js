
import dotenv from "dotenv";
dotenv.config();

export const mongoURL = process.env.MONGO_URL;
export const PORT = process.env.PORT || 5555;
