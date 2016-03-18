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

};
