import express from 'express';

const userRouter = express.Router();

const editUser = (req, res) => res.send("edit user");

userRouter.get("/edit", editUser);

export default userRouter;