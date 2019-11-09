import React from 'react';
import Home from './home'

class AppContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            container: "home"
        }
    }

    render(){
        switch(this.state.container)
        {
            case "home":
                return <Home />
            default:
                return <Home />
        }
    }

}

export default AppContainer;