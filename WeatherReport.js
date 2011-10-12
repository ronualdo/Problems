var Coord = function(x, y) {
  this.x = x;
  this.y = y;
}

var WeatherReport = function(map) {
  this.map = map;

  this.daysUntilHittingAnAirport = function() {
    var a = map;

    while (!map.cloudReachedAirport()) {
      a = map.nextDayMap()
    }

    return map.day;
  }

  this.daysUntilHittingAllAirports = function() {
    var a = map;

    while (!map.cloudReachedAllAirports()) {
      a = map.nextDayMap();
    }

    return map.day;
  }
}

//needed to teste with jasmine-node
exports.Coord = Coord
exports.WeatherReport = WeatherReport
