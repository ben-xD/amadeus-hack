import axios from 'axios';
import apiUrl from './servicebase';

class QuestionService {

    getQuestions(id){
        // Make a request for a user with a given ID
        return axios.get(apiUrl + '/' +id);
    }

    getSuggestionsData (data){
        var data = {
            flight:{
                airline: 'British Airways',
                price: '100 GBP',
                date: '12 Dec 2019',
                start:'LHR London',
                destination: 'CDG Paris',
                time: {
                    start: '10:00 GMT',
                    reach: '12:00 GMT'
                }
            }
        }

        return data;
    }
}
export default new QuestionService();