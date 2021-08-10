import express from "express"

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
    console.log(`[logger] ${req.method} ${req.url}`);
    next();
}

app.use(logger);

const handleHome = (req, res) => {
    console.log(`get request / home!!`);
    return res.send("Welcome Home");
}

const handleLogin = (req, res) => {
    console.log(`get request Login`);
    return res.send("Login page");
}

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = ()=> console.log(`server listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);