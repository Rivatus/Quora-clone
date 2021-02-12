import axios from 'axios';

const url = "http://localhost:5000/api";

export const askquestion = (question) => axios.post(`${url}/question`, question);

export const login = (user) => axios.post(`${url}/login`, user);