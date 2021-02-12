import * as api from '../api/index.js';

export const askQuestion = (question) => async (dispatch) => {
    try {
        const data = await api.askquestion(question);
        await dispatch({ type: "Ask", payload: data.data });
    } catch (error) {
        console.log(error);
        await dispatch({ type: "Ask", payload: 2 });
    }
}

export const login = (user) => async (dispatch) => {
    const userDetail = user?.profileObj;
    const token = user?.tokenId;
    try {
        await api.login(userDetail);
        await dispatch({ type: 'AUTH', data: { userDetail, token } });
    } catch (error) {
        console.log(error);
    }
}