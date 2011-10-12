var weatherReportModule = require('/home/ronualdo/arquivos/workspace/Ashes/WeatherReport')

var Coord = weatherReportModule.Coord
var WeatherReport = weatherReportModule.WeatherReport

describe('A WeatherReport', function() {
  
  it('should inform in how many days the ash cloud will reach an airport', function() {
    var expectedDays = 2

    var map = {
      day: expectedDays,
      
      cloudReachedAirport: function() {
        return true;
      },

      nextDayMap: function() {
        return this;            
      }
      
    }

    var weatherReport = new WeatherReport(map);
    var days = weatherReport.daysUntilHittingAnAirport();

    expect(days).toEqual(expectedDays);
  });

  it('should inform in how many days the ash cloud will reach all airports', function() {
    var expectedDays = 2;
    var map = {
      day: expectedDays,
      
      cloudReachedAllAirports: function() {
        return true;
      }
    }

    var weatherReport = new WeatherReport(map);
    var days = weatherReport.daysUntilHittingAllAirports();

    expect(days).toEqual(expectedDays);
  });
  
});
