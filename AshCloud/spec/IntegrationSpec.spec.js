var weatherReportModule = require('/home/ronualdo/arquivos/workspace/problems/AshCloud/WeatherReport');

var WeatherReport = weatherReportModule.WeatherReport;
var Map = weatherReportModule.Map

describe('Integration', function() {

  it('should return correct value', function() {
    var map = new Map(3, 3);
    map.cloudCoordinates = [map.coord(0,0)];
    map.airportCoordinates = [map.coord(2,2)]

    var report = new WeatherReport(map);

    expect(report.daysUntilHittingAnAirport()).toEqual(5);
  });

});
