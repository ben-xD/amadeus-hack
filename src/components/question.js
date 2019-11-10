import React from 'react';
import questionservice from '../api/questionservice';


class Question extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location : '',
            typeOfTravel: 'Business',
            toLocation: ''
        }
    }

    render(){
        return <div>
            <form>
                <span>Can you share your location       </span>
                <input type = "text" value = {this.state.location} 
                onChange = {event=> this.setState({location:event.target.value})} />
            <br />
            <span>Type of Travel </span>
            <input type="radio" name="type-of-travel" 
                value={"Business"} 
                checked={this.state.typeOfTravel === "Business"} 
                onChange={this.onSiteChanged} /> Business
            <input type="radio" name="type-of-travel" 
                value={"Leissure"} 
                checked={this.state.typeOfTravel === "Leissure"} 
                onChange={this.onSiteChanged} />Leissure
                <br />
            <span>Prefered Location</span>
            
            <input type = "text" value = {this.state.toLocation} 
                onChange = {event=> this.setState({toLocation:event.target.value})} /><br />     
            <button onClick = {this.onGoClick} >Go</button>
            </form>
        </div>
    }

    onGoClick =(event) =>{
        var data = questionservice.getSuggestionsData(undefined);
        this.props.containerChange("result", data)
    }

    onSiteChanged = (event) => {
        this.setState({
            typeOfTravel: event.target.value
        })
    }
}

export default Question;