export const trending = (req, res) => res.send("trending video"); 
export const edit = (req, res) => res.send("edit video"); 

export const search = (req, res) => res.send("search video page");
export const see = (req, res) =>{ 
    console.log(req.params);
    return res.send(`see video page #${req.params.id}`);
}
export const remove = (req, res) => res.send("delete video page");
export const upload = (req, res) => res.send("upload video page");