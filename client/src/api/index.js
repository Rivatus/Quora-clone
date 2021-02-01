import axios from 'axios';

const url = "http://localhost:5000/api";

const question = {
    heading: "What is my name?",
    description: "I don't know my name.",
    postedBy: "Me",
    date: new Date(),
    tags: ["Name", "Jyotish"],
    answersId: []
};

export const askquestion = () => axios.post(`${url}/question`, question);