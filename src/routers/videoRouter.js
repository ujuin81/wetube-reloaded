import express from "express";
import {watch, edit, see, remove, upload} from '../controllers/videoController';

const videoRouter = express.Router();

videoRouter.get("/upload", upload);

videoRouter.get("/:id", see);
videoRouter.get("/:id/edit", edit);
videoRouter.get("/:id/remove", remove);

export default videoRouter;