var Map = function(height, width, cloudCoordinates, aiportsCoordinates) {
  this.height = height;
  this.width = width;

  this.coord = function(x, y) {
    var newCoordinate = new Coord(x, y);

    if(newCoordinate.isInvalid()) {
      throw new Error('Invalid Coordinate');
    }

    return new Coordinate
  }

  var Coord = function(x, y) {
    this.x = x;
    this.y = y;

    this.isInvalid = function() {
      return this.isNegative(); 
    }

    this.isNegative = function() {
      return x < 0 || y <0;
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
