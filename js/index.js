(function () {
  'use strict';

  /*
    Load Dribbble Shots

    This script uses Dribbble's API to fetch the latest shots from a specified
    Dribbble user
  */

  // Specify the user
  var dribbbleUser = 'jimniels', // Sample user from the tutorial
    html = '';

  // Load the shots via Dribbble's API
  $.getJSON('https://api.dribbble.com/v1/users/' + dribbbleUser + '/shots?access_token=e8e9cda27cc943381d71f6c250ffeba27218e826e7f1ded25a44b2445195f50f&callback=?', function (response) {
    // console.log(response.data);
    var numberOfShots = 10,
      i;

    for (i = 0; i < numberOfShots; i += 1) {
      html += '<li>';
      html += '<a href="' + response.data[i].html_url + '">';
      html += '<img src="' + response.data[i].images['normal'] + '" alt="' + response.data[i].title + '" />';
      html += '</a></li>';
    }
    $('.shots').html(html);
  });
}());
