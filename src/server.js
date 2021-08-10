import express from "express";
import morgan from "morgan"

const PORT = 4000;
const app = express();

const globalRouter = express.Router();
const userRouter = express.Router();
const videoRouter = express.Router();

const logger = morgan("dev");

const home = (req, res) => {
    return res.send("Welcome Home");
}

const login = (req, res) => {
    return res.send("Login page");
}

const editUser = (req, res) => res.send("edit user");
const watchVideo = (req, res) => res.send("watch video");

app.use(logger);

globalRouter.get("/", home);
globalRouter.get("/login", login);

userRouter.get("/edit", editUser);

videoRouter.get("/watch", watchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = ()=> console.log(`server listening on port http://localhost:${PORT}`);

app.listen(4000, handleListening);