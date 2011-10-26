var weatherModule = require('/home/ronualdo/arquivos/workspace/Ashes/WeatherReport')
var Map = weatherModule.Map

describe('Map', function() {
  
  it('should not allow to create x coordinate with negative value', function() {
    var map = new Map(2, 2);
    expect( function() {map.coord(-1, 1)} ).toThrow(new Error('Invalid Coordinate'));
  });

  it('should not allow to create y coordinate with negative value', function() {
    var map = new Map(2, 2)
    expect( function() {map.coord(1, -1)} ).toThrow(new Error('Invalid Coordinate'));
  });

  it('should not allow to create x coordinate equal or greater than map width', function() {
    var map = new Map(5, 3);
    expect( function() {map.coord(3, 3)} ).toThrow(new Error('Invalid Coordinate')); 
  });

  it('should not allow to create y coordinate equal or greater than map height', function() {
    var map = new Map(3, 5);
    expect( function() {map.coord(3, 3)} ).toThrow(new Error('Invalid Coordinate'));
  });

  it('should indicate when cloud reached an airport', function() {
    var map = new Map(3, 3)
    map.cloudCoordinates = [map.coord(0, 0)];
    map.airportCoordinates = [map.coord(0, 0), map.coord(0, 1), map.coord(1, 0)]

    expect(map.cloudReachedAnAirport()).toEqual(true);
  });

  it('should indicate when cloud reached all aiports', function() {
    var map = new Map(3, 3)
    map.cloudCoordinates = [map.coord(0, 0), map.coord(0, 1), map.coord(1, 0)]
    map.airportCoordinates = [map.coord(0,1), map.coord(1, 0)]
    
    expect(map.cloudReachedAllAirports()).toEqual(true);
  });

  it('should indicate when cloud havent reached all airports', function() {
    var map = new Map(3, 3)
    map.cloudCoordinates = [map.coord(0, 0)]
    map.airportCoordinates = [map.coord(0, 0), map.coord(0,1)]

    expect(map.cloudReachedAllAirports()).toEqual(false);
  });

  it('nextDayMap should show the cloud coordinates after 1 day',function() {
    var map = new Map(3, 3);
    map.cloudCoordinates = [map.coord(0,0)];

    var nextDay = map.nextDayMap();
    var expectCloudCoordinates = [map.coord(0,0), map.coord(1,0), map.coord(0,1)];
    expect(nextDay.cloudCoordinates.equals(expectCloudCoordinates)).toEqual(true);
  });

});
