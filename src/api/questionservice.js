import axios from 'axios';
import apiUrl from './servicebase';

class QuestionService {

    getQuestions(id){
        // Make a request for a user with a given ID
        return axios.get(apiUrl + '/' +id);
    }
}
export default new QuestionService();