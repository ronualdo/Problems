var Map = function(height, width, cloudCoordinates, aiportsCoordinates) {
  this.height = height;
  this.width = width;
  this.cloudCoordinates = [];
  this.airportCoordinates = [];

  this.coord = function(x, y) {
    var newCoordinate = new Coord(x, y);

    if(newCoordinate.isInvalid()) {
      throw new Error('Invalid Coordinate');
    }

    return newCoordinate
  }

  this.cloudReachedAnAirport = function() {
    var retorno = false;
    for(i = 0; i < this.airportCoordinates.length; i++) {
      for(j = 0; j < this.cloudCoordinates.length; j++) {
        if(this.airportCoordinates[i].equals(this.cloudCoordinates[j])) {
          retorno = true;
          break;
        }
      }
    }
    return retorno;
  }

  var Coord = function(x, y) {
    this.x = x;
    this.y = y;

    this.isInvalid = function() {
      return this.isNegative() || this.isOutOfBounds(); 
    }

    this.isOutOfBounds = function() {
      return x >= width || y >= height;
    }

    this.isNegative = function() {
      return x < 0 || y <0;
    }

    this.equals = function(anotherCoord) {
      return this.x == anotherCoord.x && this.y == anotherCoord.y;
    }
  }
}


//class
var WeatherReport = function(map) {
  this.map = map;

  
  this.daysUntilHittingAnAirport = function() {
    var hittedAirport = function(map) {
      return map.cloudReachedAirport();
    }

    return this.getDayWhen(hittedAirport);
  }

  this.getDayWhen = function(eventOccurred) {
    var auxMap = map;

    while(!eventOccurred(auxMap)) {
      auxMap = auxMap.nextDayMap();
    }

    return auxMap.day
  }

  this.daysUntilHittingAllAirports = function() {
    var cloudReachedAllAirports = function(map) {
      return map.cloudReachedAllAirports()
    }

    return this.getDayWhen(cloudReachedAllAirports);
  }
}

//needed to teste with jasmine-node
exports.Map = Map
exports.Coord = Map.Coord
exports.WeatherReport = WeatherReport
