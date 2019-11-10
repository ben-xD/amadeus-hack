import React from 'react'
var platform = new window.H.service.Platform({
    'apikey': '{pazVy0v7-hbSP07Hu_DT8SMxYZRjl6YBX4PpHVMcthY}'
});



class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            map:undefined
        }
    }
  
    render(){
        return(
        <div>
            <button onClick={()=>{this.props.containerChange("home")}}>Go back</button>
            <div>
                <h4>Suggested Flight</h4>
                <div style={{width: 45+'%', float: "left"}}>
                    <h5 style = {{color: 'green'}}>Cheapest</h5>
                    <FlightSuggestion data = {this.props.data}/>
                </div>
                <div style={{width: 45+'%', float: "right"}}>
                    <h5 style = {{color: 'green'}}>Value for money</h5>
                    <FlightSuggestion data = {this.props.data}/>
                </div>
            </div>
            <div><h4>Suggested Hotel</h4></div>
            <div>Prediction from the engine here</div>
            <div><h4>Around the location</h4></div>
            <div  id="mapContainer" style= {{width: 1024 + 'px', height: 480 + 'px'}}></div>
            
        </div>);
    }

    componentDidMount(){
        var defaultLayers = platform.createDefaultLayers();

        // Instantiate (and display) a map object:
        var map = new window.H.Map(
          document.getElementById('mapContainer'),
          defaultLayers.vector.normal.map,
          {
            zoom: 10,
            center: { lng: 13.4, lat: 52.51 }
          });
    }
}

const FlightSuggestion=React.memo((props)=>{
    return <div style = {{color: 'grey'}}>
        <span> {props.data.flight.airline}</span> <span style = {{color: 'green'}}>|</span>
        <span> {props.data.flight.price}</span> <br />
        <span> {props.data.flight.date}</span> <span style = {{color: 'green'}}>|</span>
        <span> {props.data.flight.start}</span> <span style = {{color: 'green'}}>|</span>
        <span> {props.data.flight.destination}</span> <br />
        <span> {'Depart at ' + props.data.flight.time.start}</span> <span style = {{color: 'green'}}>|</span>
        <span> {'Reach by ' + props.data.flight.time.reach}</span> 
        <button >Book now</button>
    </div>;
});

export default SearchResult;