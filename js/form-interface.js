var getRepos = require('./../js/getRepos.js').getRepos;

$(document).ready(function(){
  $("#submitButton").click(function() {
    getRepos($("#usernameInput").val());
  });
});
