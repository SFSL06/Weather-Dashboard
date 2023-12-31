// $(document).ready(function () {
  //URL to call the API to find current weather
  
   var apiURL = `https://api.openweathermap.org/data/2.5/weather?`;

    
   var apiForecast = `https://api.openweathermap.org/data/2.5/forecast?`;

    var key = "f6fcca586c887008feb57c771ac2c504";
    
    var searchString = "";
    var queryURL;
    
    var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
    console.log(searchHistory)
    // To load search Hsitory
    loadSearchHistory();
    //add click event to search button
    $(".search-button").on("click", function () {
       $("#search-input").empty();
        //user input is stored in searchString which is stored in local Storage
        //and passed to fetch weather details

        var searchString = $("#search-input").val();
        var limit = 1000;
        searchHistory.push(searchString);
        localStorage.setItem("search", JSON.stringify(searchHistory));
        loadSearchHistory();
        queryURL = apiURL + "q="  + searchString + "&appid=" + key; 
        queryForecast = apiForecast + "q="  + searchString + "&appid=" + key; 
       
        getWeather(queryURL, queryForecast);
    })
        function getWeather(queryURL, queryForecast)
        {
        
        fetch(queryURL)
            .then(function (response) {
                return response.json();
            }).then(function (data) {    
        console.log(data);            
        // Convert the temp to Celsius
        var temp = data.main.temp - 273.15;

        // To get date
        dateToday = dayjs();
        dateToday = dayjs(dateToday).format('DD/MM/YYYY');
        // Transfer content to HTML
        //create an element to store weather icon and display it
        var weatherImg = data.weather[0].icon;
        // Retrieving the URL for the image
        
        
         $(".city").html("<h1>" + data.name + ' ' + dateToday + "</h1>" + " ");
         $("#currentWeather").attr("src", "https://openweathermap.org/img/wn/" + weatherImg + "@2x.png");
         //$(".city").append(iconForecast);
         $(".temp").text("Temperature (C) " + temp.toFixed(2));
         $(".wind").text("Wind Speed: " + data.wind.speed);
         $(".humidity").text("Humidity: " + data.main.humidity);
         //currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
         // currentPicEl.setAttribute("alt", response.data.weather[0].description);           
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
        
//  var image = $("<img>").attr("src", imgURL);

//  // Appending the image
//  movieDiv.append(image);
        // currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
        // currentPicEl.setAttribute("alt", response.data.weather[0].description);
        //Get 5 day forecast
         $("#forecastHeader").text("Forecast");
          //forecastIndex  = (i * 8 ) + 1;
         
          var forecastCardEl = $("#day1")
          var dateForecast = new Date(data.list[9].dt_txt);
          dateForecast = dayjs(dateForecast).format('DD/MM/YYYY');
          var dateForecast = $("<h5>").text(dateForecast);
          forecastCardEl.append(dateForecast);
          var weatherIcon = data.list[9].weather[0].icon;
        // Retrieving the URL for the image
          var iconForecast = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
          forecastCardEl.append(iconForecast)
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
          var weatherIcon = data.list[17].weather[0].icon;
        // Retrieving the URL for the image
          var iconForecast = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
          forecastCardEl.append(iconForecast)
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
          var weatherIcon = data.list[25].weather[0].icon;
        // Retrieving the URL for the image
          var iconForecast = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
          forecastCardEl.append(iconForecast)
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
          var weatherIcon = data.list[33].weather[0].icon;
        // Retrieving the URL for the image
          var iconForecast = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + weatherIcon + "@2x.png");
          forecastCardEl.append(iconForecast)
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
       
        //display list of searches
     
        historyEl = $(".history");
        historyEl.text("");
        for (var i = 0; i < searchHistory.length; i++) {
            
            var historyItem = $("<input>")
            historyItem.text(searchHistory[i]);
            historyItem.attr("type", "text");
            historyItem.attr("readonly", true);
            historyItem.attr("value", searchHistory[i]);
            historyItem.addClass("search-btn") 
            historyItem.attr("background-colour", "grey");
            $(historyEl).append(historyItem);
            
            historyItem.attr("readonly", true);
            
        }
        // Adding a click event listener to all elements with a class of "search-btn"
      $(document).on("click", ".search-btn", function(){
          
        var cityName = $(this).val();
        console.log(cityName);
        queryURL = apiURL + "q="  + cityName + "&appid=" + key; 
       
        queryForecast = apiForecast + "q="  + cityName + "&appid=" + key; 
        console.log('query: ', queryURL)
        getWeather(queryURL, queryForecast);
      });
    }

    // Clear History button
    $("#clear-history").on("click", function () {
        localStorage.clear();
        searchHistory = [];
        loadSearchHistory();
    })

// });