/* eslint-disable prettier/prettier */
//$(document).ready(function () {

    var apiURL = `https://api.openweathermap.org/data/2.5/weather?`;

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
    
        fetch(queryURL)
            .then(function (response) {
                return response.json();
            }).then(function (data) {                
        // Convert the temp to Celsius
        var temp = data.main.temp - 273.15;
        console.log(temp);
        dateToday = dayjs();
        dateToday = dayjs(dateToday).format('DD/MM/YYYY');
        // Transfer content to HTML
         $(".city").html("<h1>" + data.name + ' ' + dateToday + "</h1>");
         $(".temp").text("Temperature (C) " + temp.toFixed(2));
         $(".wind").text("Wind Speed: " + data.wind.speed);
         $(".humidity").text("Humidity: " + data.main.humidity);
                         
            });
    });


// });