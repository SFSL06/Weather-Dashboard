/* eslint-disable prettier/prettier */
//$(document).ready(function () {

    var apiURL = `https://api.openweathermap.org/data/2.5/weather?`;

    
   var apiForecast = `https://api.openweathermap.org/data/2.5/forecast?`;

    var key = "f6fcca586c887008feb57c771ac2c504";
    // var lat = 51.5156177;
    // var lon = -0.0919983;
    var searchString = "";
    var queryURL;
    var articleNumber = 0;
    
    var searches = $('<div/>');
    $('#history').append(searches);
    searches.attr('id', 'searchHistory');
    searches.text("This is the search history");
    //     $('<div/>')
    //       .attr("id", "searches")
    //       //.append("<span/>")
    //         .text("This will display search history")
    //   )
    
    
    var forecast = $('<div/>');
      $('#forecast').append(forecast);
      forecast.attr('id', 'forecast');
      forecast.text("This is the forecast");
      
      
      
     
//     $(".clear").click(function () {
//         articleNumber = 0;
//         $("#search-string").val("");
//         $("#article-results").empty();
//     });

    $(".search-button").on("click", function () {
       //$("#search-input").empty();
       // articleNumber = 0;
        var searchString = $("#search-input").val();
        var limit = 1000;
        console.log(searchString);
        
        queryURL = apiURL + "q="  + searchString + "&appid=" + key; 
        console.log('query: ', queryURL)
        queryForecast = apiForecast + "q="  + searchString + "&appid=" + key; 
        fetch(queryURL)
            .then(function (response) {
                return response.json();
            }).then(function (data) {                
        // Convert the temp to Celsius
        var temp = data.main.temp - 273.15;
        
        dateToday = dayjs();
        dateToday = dayjs(dateToday).format('DD/MM/YYYY');
        // Transfer content to HTML
         $(".city").html("<h1>" + data.name + ' ' + dateToday + "</h1>");
         $(".temp").text("Temperature (C) " + temp.toFixed(2));
         $(".wind").text("Wind Speed: " + data.wind.speed);
         $(".humidity").text("Humidity: " + data.main.humidity);
                         
            });
            fetch(queryForecast)
            .then(function (response) {
                return response.json();
            }).then(function (data) {                
        // Convert the temp to Celsius
        // var temp = data.main.temp - 273.15;
           console.log(data);
        // Transfer content to HTML
        
        for (i = 1; i < 6; i++)
        {
          
          forecastIndex  = (i * 8 ) + 1;
          var forecastDaily = $(".forecastDaily")
          var dateForecast = new Date(data.list[forecastIndex].dt_txt);
          dateForecast = dayjs(dateForecast).format('DD/MM/YYYY');
          var dateForecast = $("<h2>").text(dateForecast);
          forecastDaily.append(dateForecast);
          var tempForecast = $("<p>").text("Temp (C) " + (data.list[forecastIndex].main.temp - 273.15).toFixed(2));
          forecastDaily.append(tempForecast);
          var windForecast = $("<p>").text("Wind: " + data.list[forecastIndex].wind.speed);
          forecastDaily.append(windForecast);
          var humidityForecast = $("<p>").text("Humidity: " + data.list[forecastIndex].main.humidity);
          forecastDaily.append(humidityForecast);
          
        }  
        });
    });


// });