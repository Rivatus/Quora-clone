export default (message = { status: 0 }, action) => {
    switch (action.type) {
        case "Ask":
            return { status: action.payload };
        case "Failure":
            return { status: 2 };
        default:
            return message;
    }
}