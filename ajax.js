
// fill in url function//
  $("button").on("click", function() {
    var Pull = $(this).attr("data-button");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      Pull + "&api_key=ZetjrzSrHRc57UykFj58lDQmN4FSQzBO&limit=10";
      //ajax stuff//
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // response //
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        // making a variable for the response
        var results = response.data;

        console.log(results)
        console.log(response)
        // loop for all the results//
        for (var i of results) {

          // making a div for each pull
          var pulledDiv = $("<div>");

          // adding the rating
          var p = $("<p>").text("Rating: " + i.rating);
            //gifs img tag
          var pulledImage = $("<img>");
            // still source
            pulledImage.attr("src", i.images["480w_still"].url);
            //added still data so it can keep track of img paused state
            pulledImage.attr("data-state", "still")
            // playing data attribute
            pulledImage.attr("data-playing", i.images.fixed_height.url)
            // paused data attribute
            pulledImage.attr("data-paused", i.images["480w_still"].url)    
          // adding class so it can be selected
          pulledImage.attr("class", "gif")
          // Append of paragraphs
          pulledDiv.append(p);
          pulledDiv.append(pulledImage);
          // Prepending b/c before is better than after
          $(".col-12").prepend(pulledDiv);
          // function for pausing and not//
          $(".gif").on("click", function() {
            var state = $(this).attr("data-state");
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-playing"));
              console.log(this);
              $(this).attr("data-state", "animate");
              console.log(this);
            } else {
              $(this).attr("src", $(this).attr("data-paused"));
              console.log(this);
              $(this).attr("data-state", "still");
              console.log(this);
            }
          });
        }
      });
  });
 