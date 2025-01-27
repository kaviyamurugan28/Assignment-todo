import dot from "dotenv"
dot.config()

export const appConfig = {
    port: process.env.PORT || 3000,
    jwt_key: process.env.JWT_SECRET || "JWT_SECRET_KEY",
    mongo_url: process.env.MONGO_URL,
    dp: process.env.DB
}