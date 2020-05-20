$(".btn").on("click", function (event) {
    event.preventDefault();
    
    var zipCode = $("#zip").val();
    var cuisines = $("#cuisine").val()
    var queryURL = "https://developers.zomato.com/api/v2.1/search?q=" + zipCode  + "%2C%20" + cuisines + "&apikey=7ad2112e89a393cbb0ebbe7f844fe015";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $(".container").empty();
        


    })
})
