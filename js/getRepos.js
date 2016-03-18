var apiKey = require('./../.env').apiKey;
var clearInfo = require('./../js/clearInfo').clearInfo;
var populateInfo = require('./../js/populateInfo').populateInfo;
var populateRepos = require('./../js/populateInfo').populateRepos;

exports.getRepos = function(username){

  clearInfo();
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    populateInfo(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });

  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    populateRepos(response);

  }).fail(function(error){
    console.log(error.responseJSON.message);
  });


};
