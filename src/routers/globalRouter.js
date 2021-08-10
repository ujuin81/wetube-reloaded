import express from "express";

const globalRouter = express.Router();

const home = (req, res) => res.send("Welcome Home");
const login = (req, res) => res.send("Login page");

globalRouter.get("/", home);
globalRouter.get("/login", login);

export default globalRouter;