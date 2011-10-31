Array.prototype.contains = function(element) {
  for(i = 0; i < this.length; i++) {
    if(this[i].equals(element)) {
      return true;
    }
  }

  return false;
}

Array.prototype.containsSlice = function(slice) {
  var retorno = false;

  for(i = 0; i < slice.length; i++) {
    if(!this.contains(slice[i])) {
      retorno = false;
      break;
    } else {
      retorno = true;
    }
  }

  return retorno;
}

Array.prototype.equals = function(testArr) {
  var result = true;
  if (this.length == testArr.length) {
    for(i = 0; i < this.length; i++) {
      if(this.contains(testArr[i])) {
        continue;
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }

  return result;
}

var Map = function(height, width) {
  this.day = 1;
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
    for(i = 0; i < this.airportCoordinates.length; i++) {
      if(this.cloudCoordinates.contains(this.airportCoordinates[i])) {
        return true;
      }
    }
    return false;
  }

  this.cloudReachedAllAirports = function() {
    return this.cloudCoordinates.containsSlice(this.airportCoordinates);
  }

  this.nextDayMap = function() {
    var result = new Map(this.width, this.heigth);
    
    var newCoordinates = this.cloudCoordinates;
    for(i = 0; i < this.cloudCoordinates.length; i++) {
      newCoordinates = newCoordinates.concat(this.cloudCoordinates[i].neighbours());
    }
    
    result.day = this.day + 1;
    result.airportCoordinates = this.airportCoordinates;
    result.cloudCoordinates = newCoordinates;
    
    return result;
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

    this.neighbours = function() {
      var result = [];
      if (x > 0) {
        result = result.concat(new Coord(x-1, y));
      }

      if (y > 0) {
        result = result.concat(new Coord(x, y-1));
      }
      
      if(x < width-1){
        result = result.concat(new Coord(x+1, y));
      }
      
      if(y < height-1) {
        result = result.concat(new Coord(x, y+1));
      }
      return result;
    }
  }
}


//class
var WeatherReport = function(map) {
  this.map = map;

  
  this.daysUntilHittingAnAirport = function() {
    var hittedAirport = function(map) {
      return map.cloudReachedAnAirport();
    }

    return this.getDayWhen(hittedAirport);
  }

  this.getDayWhen = function(eventOccurred) {
    var auxMap = map;

    while(!eventOccurred(auxMap)) {
      console.log(auxMap.day)
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
