var Coord = function(x, y) {
  this.x = x;
  this.y = y;
}

var WeatherReport = function(map) {
  this.map = map;

  
  this.daysUntilHittingAnAirport = function() {
    return this.getDayWhen(map.cloudReachedAirport)
  }

  this.getDayWhen = function(eventOccurred) {
    var auxMap = map;

    while(!eventOccurred()) {
      auxMap = map.nextDayMap();
    }

    return auxMap.day
  }

  this.daysUntilHittingAllAirports = function() {
    return this.getDayWhen(map.cloudReachedAllAirports)
  }
}

//needed to teste with jasmine-node
exports.Coord = Coord
exports.WeatherReport = WeatherReport
