import axios from 'axios';
import apiUrl from './servicebase';
const axios = require('axios');

class QuestionService {

    getQuestions(id){
        // Make a request for a user with a given ID
        return axios.get(apiUrl + '/' +id);
    }
}
export default new QuestionService();