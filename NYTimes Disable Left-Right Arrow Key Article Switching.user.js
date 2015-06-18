// ==UserScript==
// @name         NYTimes Disable Left-Right Arrow Key Article Switching
// @namespace    sarahgerweck
// @version      0.1
// @description  Prevents left/right arrow keys going to prev/next article.
// @author       You
// @match        http*://*.nytimes.com/*
// @require      https://code.jquery.com/jquery-1.11.3.min.js
// @grant        none
// ==/UserScript==

// tampermonkey

$(document).ready(function() {
    $("body").keydown(function(e) {
        if (e.keyCode == 37 || e.keyCode == 39) {
            e.preventDefault();
            return false;
        }
    });
});