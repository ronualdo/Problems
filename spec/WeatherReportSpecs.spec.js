var weatherReportModule = require('/home/ronualdo/arquivos/workspace/Ashes/WeatherReport')

var WeatherReport = weatherReportModule.WeatherReport

describe('A WeatherReport', function() {
  
  it('should inform in how many days the ash cloud will reach an airport', function() {
    var map = {
      day: 1,
      
      cloudReachedAnAirport: function() {
        return false;
      },

      nextDayMap: function() {
        return anotherDayMap = {
          day: 2,
          cloudReachedAnAirport: function() {
            return true;
          }
        };
      }
      
    }

    var weatherReport = new WeatherReport(map);
    var days = weatherReport.daysUntilHittingAnAirport();

    expect(days).toEqual(2);
  });

  it('should inform in how many days the ash cloud will reach all airports', function() {
    var map = {
      day: 1,
      
      cloudReachedAllAirports: function() {
        return false;
      },

      nextDayMap: function() {
        
        return anotherDayMap = {
          day: 2,
          cloudReachedAllAirports: function() {
            return true;
          }
        }
      }

    }

    var weatherReport = new WeatherReport(map);
    var days = weatherReport.daysUntilHittingAllAirports();

    expect(days).toEqual(2);
  });
  
});
