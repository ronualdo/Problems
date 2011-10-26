var weatherReportModule = require('/home/ronualdo/arquivos/workspace/Ashes/WeatherReport')

var Map = weatherReportModule.Map
var Coord = weatherReportModule.Coord

describe('A coord', function() {
  
  it('a central coord should return all 4 neighbours', function() {
    var map = new Map(3, 3);
    var coord = map.coord(1, 1);

    var neighbours = coord.neighbours();
    
    expect(neighbours.length).toEqual(4);
    expect(neighbours.equals([map.coord(0, 1), map.coord(2,1), map.coord(1, 0), map.coord(1, 2)])).toEqual(true);
  });

  it('the first coord should return 2 neighbours', function() {
    var map = new Map(3, 3);
    var coord = map.coord(0, 0);

    var neighbours = coord.neighbours();

    expect(neighbours.length).toEqual(2);
    expect(neighbours.equals([map.coord(0,1), map.coord(1,0)])).toEqual(true);
  });

  it('the last coord should return 2 neighbours', function() {
    var map = new Map(3, 3);
    var coord = map.coord(2, 2);

    var neighbours = coord.neighbours();

    expect(neighbours.length).toEqual(2);
    expect(neighbours.equals([map.coord(2,1), map.coord(1,2)])).toEqual(true);
  });

});
