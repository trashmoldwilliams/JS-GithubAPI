var apiKey = require('./../.env').apiKey;
var clearInfo = require('./../js/clearInfo').clearInfo;
var populateInfo = require('./../js/populateInfo').populateInfo;

exports.getRepos = function(username){

  clearInfo();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    populateInfo(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    for(var i = 0; i < response.length; i++) {
      $("#projectList").append("<li>" + response[i].name + "<ul>" +
                                "<li>Description: " + response[i].description + "</li>" +
                                "<li>Language: " + response[i].language + "</li>" +
                                "<li>Created at: " + response[i].created_at.substring(0,10) + "</li>" +
                                "<li>url: " + response[i].url + "</li>" +
                                "</ul></li>");
    }

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });


};
