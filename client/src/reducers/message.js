export default (message = { status: 0 }, action) => {
    console.log(action.type);
    switch (action.type) {
        case "Ask":
            return { status: action.payload };
        case "Failure":
            return { status: 0 };
        default:
            return message;
    }
}