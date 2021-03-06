export const trending = (req, res) => {
    const videos = [
        {
            title: "Video 1",
            rating: 5,
            views: 90
        },
        {
            title: "Video 2",
            rating: 3,
            views: 3
        },
        {
            title: "Video 3",
            rating: 4,
            views: 9000
        }]
    ;
    return res.render("home", {pageTitle: "Home", videos});
};
export const edit = (req, res) => res.render("edit", {pageTitle: "Edit"}); 

export const search = (req, res) => res.send("search video page");
export const see = (req, res) => res.render("watch", {pageTitle: "Watch"});
export const remove = (req, res) => res.send("delete video page");
export const upload = (req, res) => res.send("upload video page");