import  Amadeus from 'amadeus';

var amadeus = new Amadeus({
    clientId: 'Q7sdLqypQxAxVJbtGM141GhUvqVU7uiX',
    clientSecret: 'FC8P0IXpf0R6GRZ9'
});

class FlightService {

    getPois = ({latitude, longitude})=> {
        // console.log({latitude, longitude})
        // return amadeus.referenceData.locations.pointsOfInterest.get({
        //     latitude,
        //     longitude,
        //     radius: 10
        //   });
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const results = [
                    {lat: 40.49181, lng: -3.56948},
                    {lat: 40.46181, lng: -3.57948},
                    {lat: 40.5181, lng: -3.66948},
                    {lat: 40.69181, lng: -3.76948}
                ];
                resolve(results);
            }, 300)
        })
    }
}


export default new FlightService();

