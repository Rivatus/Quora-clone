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