export const trending = (req, res) => {
    const videos = [{title: "Video 1"},{title: "Video 2"},{title: "Video 3"}]
    return res.render("home", {pageTitle: "Home", videos});
};
export const edit = (req, res) => res.render("edit", {pageTitle: "Edit"}); 

export const search = (req, res) => res.send("search video page");
export const see = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const remove = (req, res) => res.send("delete video page");
export const upload = (req, res) => res.send("upload video page");