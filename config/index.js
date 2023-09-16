import dotenv from "dotenv";

dotenv.config();

export const dev = {
    app: {
        port:process.env.PORT,
    }
}