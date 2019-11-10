import React from 'react'
const { data } = require('./data')
var platform = new window.H.service.Platform({
    'apikey': '{pazVy0v7-hbSP07Hu_DT8SMxYZRjl6YBX4PpHVMcthY}'
});

console.log(data)
const {lat, lng} = data[0].location
const location = {lat, lng}

class SearchResult extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location,
            map:undefined,
            locations: data[0].poi
        }
    }
  
    render(){
        debugger
        return(
        <div>
            <div><h4>Suggested Flight</h4></div>
        <div>to {data[0].airport}</div>
            <div><h4>Suggested Hotel</h4></div>
            <div>Prediction from the engine here</div>
            <div><h4>Around the location</h4></div>
            <div  id="mapContainer" style= {{width: 1024 + 'px', height: 480 + 'px'}}></div>
            <button onClick={()=>{this.props.containerChange("home")}}>Go back</button>
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
            center: this.state.location
          });

          for (var i = 0; i < this.state.locations.length; i++) {
            console.log(this.state.locations[i])
            var marker = new window.H.map.Marker(this.state.locations[0])
            map.addObject(marker);
        }

        //   this.setState({
        //       rendererdOn: Date.now,
        //       map:map
        //   })
    }
}

export default SearchResult;