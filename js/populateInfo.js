exports.populateInfo = function(response) {
  $('#userContainer').show();
  $('#avatarContainer').append("<img src='" + response.avatar_url + "'>");
  $('#usernameOutput').append(response.login);
  $('#nameOutput').append(response.name);
  $('#followersCount').append(response.followers);
  $('#followingCount').append(response.following);
  $('#repoCount').append(response.public_repos);
};
