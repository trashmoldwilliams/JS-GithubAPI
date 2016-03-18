var apiKey = require('./../.env').apiKey;

exports.getRepos = function(username){

  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    $('#avatarContainer').append("<img src='" + response.avatar_url + "'>");
    $('#usernameOutput').append(response.login);
    $('#nameOutput').append(response.name);
    $('#followersCount').append(response.followers);
    $('#followingCount').append(response.following);
    $('#repoCount').append(response.public_repos);


  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(response);
    for(var i = 0; i < response.length; i++) {
      $("#projectList").append("<li>" + response[i].name + "<ul>" +
                                "<li>Description: " + response[i].description + "</li>" +
                                "<li>Language: " + response[i].language + "</li>" +
                                "<li>Created at: " + response[i].created_at.substring(0,10) + "</li>" +
                                "<li>url: " + response[i].url + "</li>" +
                                "</ul></li>")
    }

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });


};
