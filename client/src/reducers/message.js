export default (message = { status: 0 }, action) => {
    console.log("hi");
    console.log(action.type);
    console.log(action.payload);
    switch (action.type) {
        case "Ask":
            return { status: action.payload };
        case "Failure":
            return { status: 2 };
        default:
            return message;
    }
}