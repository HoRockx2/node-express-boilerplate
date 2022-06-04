import express from "express";
import morgan from "morgan";

const app = express();
const logger = morgan("dev");

app.use((req, res, next) => {
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    next();
});

app.use(logger);

app.get("/", (req, res, next) => {
    return res.send("Hello express");
});

export default app;