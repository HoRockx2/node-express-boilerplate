import app from "./init";
import morgan from "morgan";

const logger = morgan("dev");

app.use((req, res, next) => {
    res.header("Cross-Origin-Embedder-Policy", "require-corp");
    res.header("Cross-Origin-Opener-Policy", "same-origin");
    next();
});

app.set(logger);

app.get("/", (req, res, next) => {
    return res.send("Hello express");
});