
export default (posts = [], action) => {
    console.log(action.type);
    switch (action.type) {
        case "Ask":
            console.log("Something Asked");
            return posts;
        default:
            console.log("Default");
            return posts;
    }
}
