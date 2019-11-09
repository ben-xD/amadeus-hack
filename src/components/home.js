import React from 'react'
import Question from './question'

class Home extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <h3>Welcome to Tenzing !! Your personal travel agent</h3>
            <Question containerChange = {this.onContainerCnage} />
        </div>;
    }

    onContainerCnage = (_cont) =>{
        this.props.containerChange(_cont);
    }
}

export default Home;