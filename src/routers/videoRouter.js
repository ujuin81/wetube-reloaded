import express from "express";
import {watch, edit, see, remove, upload} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get("/upload", upload);

videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/remove", remove);

export default videoRouter;