import axios from 'axios';
const unsplash = axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID fe727d8902c6c18516e16a15d8d47f465b32eddc5b6ff77e81edec5cb0b0c89a'
    }
});

export default unsplash;
