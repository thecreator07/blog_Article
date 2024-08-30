import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./DB.js";
import path from "path"
import { fileURLToPath } from "url"

const app = express();
const port = process.env.PORT || 8000;
app.use(
    cors({
        origin: ["http://localhost:5173","http://localhost:8000","http://blog-article-seven.vercel.app"], //urls to give access
        credentials: true,
    })
);
dotenv.config({
    path: ".env",
}); 
const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static(path.join(__dirname,"./dist")));
app.use(express.json());

app.get('/ping', (req, res) => {
    res.status(200).send('Server is running');
});


import CardRouter from "./routes.js"
app.use("/api/v1",CardRouter)

connectDb().then(() => {
    app.on("Error", (err) => {
        console.log(err);
    });

    app.listen(port, () => {
        console.log(`Server running on port: http://localhost:${port}`);
    });

}).catch((err) => {
    console.log("MongoDb connection failed !!", err);
});


