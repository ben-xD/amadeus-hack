import  Amadeus from 'amadeus';

var amadeus = new Amadeus({
    clientId: 'Q7sdLqypQxAxVJbtGM141GhUvqVU7uiX',
    clientSecret: 'FC8P0IXpf0R6GRZ9'
});

class FlightService {

    getFlight = ()=> {
        var result =  amadeus.referenceData.urls.checkinLinks.get({
            airlineCode: 'EY'
          });

          return result;
    }

}

export default new FlightService();

