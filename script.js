$(".btn").on("click",function(event){
    event.preventDefault();
    $(".container").empty();
    var queryURL = "https://developers.zomato.com/api/v2.1/search?apikey=7ad2112e89a393cbb0ebbe7f844fe015";
    
    $.ajax({
        url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response)
         $("#zip").val()=response.restaurants[0].restaurant.location.zipcode;
        $("#cuisine").val()=response.restaurants[0].restaurant.cuisines;
        
    
    })
})