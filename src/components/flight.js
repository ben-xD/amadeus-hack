import React from 'react' ;
import flight from '../api/flightservice';
import questionService from '../api/questionservice'

class Flight extends React.PureComponent{
    constructor(props){
        super(props)
        this.state = {
            flight: 'L'
        }
    }

    render(){
        return <div>{this.state.flight}</div>
    }

    componentDidMount(){
        let that = this;
        // flight.getFlight().then(function(response){
        //     that.setState({
        //         flight : response.data[0].href
        //     })
        //     console.log(response.data);
        //   }).catch(function(responseError){
        //     console.log(responseError.code);
        //   });

        
        questionService.getQuestions(1).then(function(response) {
           console.log(response.data);
        })
    }
}

export default Flight;