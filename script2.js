/*
* chapter 9
* case
* eating well in season
*
* */

"use strict";

// define global variables
var queryArray = [];

function populateInfo() {
    if (location.search) {
        var queryData = location.search;
        queryData = queryData.substring(1, queryData.length);
        queryArray = queryData.split("&");
    }
}

if (window.addEventListener) {
    window.addEventListener("load", populateInfo, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", populateInfo);
}