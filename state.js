

let state = (function() {
   return {
      map: null,
      infoWindow: null,
      markers: [],
      directionsDisplay: null,
      currentLocation: {lat: 35.227085, lng:  -80.843124}
   };
}());

let busDirection = (function() {
   return {
      E: 'East',
      W: 'West',
      S: 'South',
      N: 'North'
   };
}());

let responseStatus = (function() {
   return {
      'ZERO_RESULTS': 'No results, non-existent address.',
      'OVER_QUERY_LIMIT': 'You are over your quota.',
      'REQUEST_DENIED': 'Your request was denied.',
      'INVALID_REQUEST': 'The query (address, components, or latlng is missing',
      'UNKNOWN_ERROR': 'The request could not be processed due to a server error. Try again!',
      'busStopCount': 0
   };
}());

let cpccCampus = (function() {
   return {
      'central': {'lat': 35.2174, 'lng': -80.8305},
      'levine': {'lat': 35.10653, 'lng': -80.6939},
      'merancas': {'lat': 35.39281, 'lng': -80.8406}
   };
}());

let student = (function() {
   return {
      'id': 1,
      'class': [{'course': 'ENG-111',
                  'loc': {'lat': 35.10653, 'lng': -80.6939},
                  'campus': 'Levine'},
               {'course': 'MAT-171',
               'loc': {'lat': 35.39281, 'lng': -80.8406},
               'campus': 'Merancas'},
               {'course': 'BIO-168',
                'loc' : {'lat': 35.2174, 'lng': -80.8305},
               'campus': 'Central'}]
   };
}());



