import React from 'react';
import Home from './home'
import Result from './searchresult'

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
                return <Home containerChange = {this.containerChange}/>
            case "result":
                return <Result containerChange = {this.containerChange} data= {this.state.data}/>
            default:
                return <Home containerChange = {this.containerChange}/>
        }
    }

    containerChange = (_container, _data)=>{
        this.setState({
            container: _container,
            data: _data
        })
    }

}

export default AppContainer;