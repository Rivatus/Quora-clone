import * as api from '../api/index.js';

export const askQuestion = () => async (dispatch) => {
    try {
        await api.askquestion();

        dispatch({ type: "Ask", payload: "None" });
    } catch (error) {
        console.log(error);
    }
}