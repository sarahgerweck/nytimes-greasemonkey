// ==UserScript==
// @name        NYTimes Disable Left/Right Arrow Key Article Switching
// @namespace   sarahgerweck
// @description Prevents left/right arrow keys going to prev/next article.
// @include     http://*.nytimes.com*
// @require     https://code.jquery.com/jquery-1.11.3.min.js
// @version     1
// @grant       none
// ==/UserScript==

var $ = unsafeWindow.jQuery;
$(document).ready(function() {
  $("body").keydown(function(e) { 
    if (e.keyCode == 37 || e.keyCode == 39) {
      e.preventDefault();
      return false;
    }
  });
});
