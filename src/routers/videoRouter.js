import express from "express";

const videoRouter = express.Router();

const watchVideo = (req, res) => res.send("watch video");

videoRouter.get("/watch", watchVideo);

export default videoRouter;