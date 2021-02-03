export default (message={status:0}, action) => {
    switch (action.type) {
        case "Ask":
            return {status:action.payload};
        default:
            return {status:0};
    }
}