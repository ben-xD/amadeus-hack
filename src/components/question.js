import React from 'react';

class Question extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location : ''
        }
    }

    render(){
        return <div>
            <form>
                <span>Can you share your location       </span>
                <input type = "text" value = {this.state.location} 
                onChange = {event=> this.setState({location:event.target.value})} />
            </form>
        </div>
    }
}

export default Question;