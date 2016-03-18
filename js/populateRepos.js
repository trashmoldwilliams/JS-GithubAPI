exports.populateInfo = function(response) {
  for(var i = 0; i < response.length; i++) {
    $("#projectList").append("<li>" + response[i].name + "<ul>" +
                              "<li>Description: " + response[i].description + "</li>" +
                              "<li>Language: " + response[i].language + "</li>" +
                              "<li>Created at: " + response[i].created_at.substring(0,10) + "</li>" +
                              "<li>url: " + response[i].url + "</li>" +
                              "</ul></li>");
  }
}
