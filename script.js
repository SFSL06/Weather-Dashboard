// $(document).ready(function () {
 
    var apiURL = `https://api.openweathermap.org/data/2.5/weather?`;

    
   var apiForecast = `https://api.openweathermap.org/data/2.5/forecast?`;

    var key = "f6fcca586c887008feb57c771ac2c504";
    
    var searchString = "";
    var queryURL;
    var articleNumber = 0;
    let searchHistory = JSON.parse(localStorage.getItem("searches")) || [];
    loadSearchHistory();

    $(".search-button").on("click", function () {
       $("#search-input").empty();
       
        var searchString = $("#search-input").val();
        var limit = 1000;
        searchHistory.push(searchString);
        localStorage.setItem("search", JSON.stringify(searchHistory));
        loadSearchHistory()
        queryURL = apiURL + "q="  + searchString + "&appid=" + key; 
        queryForecast = apiForecast + "q="  + searchString + "&appid=" + key; 
        console.log('query: ', queryURL)
        getWeather(queryURL, queryForecast);
    })
        function getWeather(queryURL, queryForecast)
        {
        
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
        var forecastDaily = $(".forecastDaily");
        $(".forecastDaily").text("")
        //var forecastCard = $(".forestCard");
        var dateForecast = "0";
        var tempForecast = "0";
        var windForecast = "0";
        var humidityForecast = "0";

        
         $("#forecastHeader").text("Forecast");
          //forecastIndex  = (i * 8 ) + 1;
         var forecastCardEl = $("#day1")
          var dateForecast = new Date(data.list[9].dt_txt);
          dateForecast = dayjs(dateForecast).format('DD/MM/YYYY');
          var dateForecast = $("<h5>").text(dateForecast);
          forecastCardEl.append(dateForecast);
          var tempForecast = $("<p>").text("Temp (C) " + (data.list[9].main.temp - 273.15).toFixed(2));
          forecastCardEl.append(tempForecast);
          var windForecast = $("<p>").text("Wind: " + data.list[9].wind.speed);
          forecastCardEl.append(windForecast);
          var humidityForecast = $("<p>").text("Humidity: " + data.list[9].main.humidity);
          forecastCardEl.append(humidityForecast);
          forecastDaily.append(forecastCardEl);
         
          var forecastCardEl = $("#day2")
          var dateForecast = new Date(data.list[17].dt_txt);
          dateForecast = dayjs(dateForecast).format('DD/MM/YYYY');
          var dateForecast = $("<h5>").text(dateForecast);
          forecastCardEl.append(dateForecast);
          var tempForecast = $("<p>").text("Temp (C) " + (data.list[17].main.temp - 273.15).toFixed(2));
          forecastCardEl.append(tempForecast);
          var windForecast = $("<p>").text("Wind: " + data.list[17].wind.speed);
          forecastCardEl.append(windForecast);
          var humidityForecast = $("<p>").text("Humidity: " + data.list[17].main.humidity);
          forecastCardEl.append(humidityForecast);
          forecastDaily.append(forecastCardEl);

          var forecastCardEl = $("#day3")
          var dateForecast = new Date(data.list[25].dt_txt);
          dateForecast = dayjs(dateForecast).format('DD/MM/YYYY');
          var dateForecast = $("<h5>").text(dateForecast);
          forecastCardEl.append(dateForecast);
          var tempForecast = $("<p>").text("Temp (C) " + (data.list[25].main.temp - 273.15).toFixed(2));
          forecastCardEl.append(tempForecast);
          var windForecast = $("<p>").text("Wind: " + data.list[25].wind.speed);
          forecastCardEl.append(windForecast);
          var humidityForecast = $("<p>").text("Humidity: " + data.list[25].main.humidity);
          forecastCardEl.append(humidityForecast);
          forecastDaily.append(forecastCardEl);

          var forecastCardEl = $("#day4")
          var dateForecast = new Date(data.list[33].dt_txt);
          dateForecast = dayjs(dateForecast).format('DD/MM/YYYY');
          var dateForecast = $("<h5>").text(dateForecast);
          forecastCardEl.append(dateForecast);
          var tempForecast = $("<p>").text("Temp (C) " + (data.list[33].main.temp - 273.15).toFixed(2));
          forecastCardEl.append(tempForecast);
          var windForecast = $("<p>").text("Wind: " + data.list[33].wind.speed);
          forecastCardEl.append(windForecast);
          var humidityForecast = $("<p>").text("Humidity: " + data.list[33].main.humidity);
          forecastCardEl.append(humidityForecast);
          forecastDaily.append(forecastCardEl);
        });

}
    function loadSearchHistory() {
       
      
     
        historyEl = $(".history");
        historyEl.text("");
        for (let i = 0; i < searchHistory.length; i++) {
            
            var historyItem = $("<div>")
            historyItem.text(searchHistory[i]);
            //$("historyItem").addClass("form-control d-block bg-white");
            historyItem.attr("value", searchHistory[i]);
            $("historyItem").click(function() {
               getWeather(historyItem.value);
            });
            $(historyEl).append(historyItem);
        }
    }

    // Clear History button
    $("#clear-history").on("click", function () {
        localStorage.clear();
        searchHistory = [];
        loadSearchHistory();
    })

// });