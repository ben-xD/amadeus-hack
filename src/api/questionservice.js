import axios from 'axios';
import apiUrl from './servicebase';

class QuestionService {

    getQuestions(id){
        // Make a request for a user with a given ID
        return axios.get(apiUrl + '/' +id);
    }

    getSuggestionsData (){
        return {
            flight:{
                airline: 'British Airways',
                price: '100 GBP',
                date: '12 Dec 2019',
                start:'LHR London',
                destination: 'MAD Madrid',
                time: {
                    start: '10:00 GMT',
                    reach: '12:00 GMT'
                }
            }
        }
    }
}

export default new QuestionService();
