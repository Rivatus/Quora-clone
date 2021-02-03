export default (message={status:0}, action) => {
    switch (action.type) {
        case "Success":
            return {status:1};
        case "Failure":
            return {status:2};
        default:
            return {status:0};
    }
}