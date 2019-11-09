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
            <div><h4>Suggested Flight</h4></div>
            <div>Prediction from the engine here</div>
            <div><h4>Suggested Hotel</h4></div>
            <div>Prediction from the engine here</div>
            <div><h4>Around the location</h4></div>
            <div  id="mapContainer" style= {{width: 1024 + 'px', height: 480 + 'px'}}></div>
            <button onClick={()=>{this.props.containerChange("home")}}>Go back</button>
        </div>);
    }

    componentDidMount(){
        debugger;
        var defaultLayers = platform.createDefaultLayers();

        // Instantiate (and display) a map object:
        var map = new window.H.Map(
          document.getElementById('mapContainer'),
          defaultLayers.vector.normal.map,
          {
            zoom: 10,
            center: { lng: 13.4, lat: 52.51 }
          });

        //   this.setState({
        //       rendererdOn: Date.now,
        //       map:map
        //   })
    }
}

export default SearchResult;