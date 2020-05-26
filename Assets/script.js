$(".btn").on("click", function (event) {
    event.preventDefault();
    var zipCode = $("#zip").val();
   
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDgBivFUE9d6ctIZDBOhP6_ZntlaH2CYoU&address=" + zipCode,
        method: "GET"
    }).then(function (response) {
        //console.log(response);
        var coordsLat = response.results[0].geometry.location.lat 
        var coordsLong = response.results[0].geometry.location.lng
        var cuisines = $("#cuisine").val()
        var queryURL = "https://developers.zomato.com/api/v2.1/search?lat=" + coordsLat + "&lon=" + coordsLong + "&q=" + cuisines + "&apikey=7ad2112e89a393cbb0ebbe7f844fe015";
        //console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            //console.log(response)
            $(".jumbotron").empty();
            var results = response.restaurants;
            for(var i = 0; i < results.length / 2; i++){
                var rest = response.restaurants[i].restaurant
                var restLat = rest.location.latitude;
                var restLong = rest.location.longitude;
                var newDiv = $("<div>");
                newDiv.append("<h3>" + rest.name + "</h3><h5>" + rest.location.address + "</h5><p>" + rest.timings + "</p><img src='https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/pin-s(" + restLong + "," + restLat + ")/" + restLong + "," + restLat + ",14,0,0/300x200?access_token=pk.eyJ1IjoibWFxdWlzcGUiLCJhIjoiY2thaGw0YTd6MGtwcjJwdDFmYWkxaDd5dyJ9.QBCG28Weu55ywGM67a3G_Q'><hr class='my-4'>");
                $(".jumbotron").append(newDiv);
            }
        })
    });
    


    
});
