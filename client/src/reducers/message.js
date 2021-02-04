export default (message = { status: 0 }, action) => {
    switch (action.type) {
        case "Ask":
            return { status: action.payload };
        case "Reset":
            return { status:0};
        default:
            return message;
    }
}