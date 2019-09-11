/* This is to serve index.html with few ajax call to pull data from server
 * Author: HartCode programmer
 */
"use strict";

$(function() {

    $("#leaguesBtn").on("click", function() {
        let leagues = 'leagues';
        getData(leagues);
    })

    $("#teamsBtn").on("click", function() {
        let teams = 'teams';
        getData(teams);
    })

});


function getData(path) {
    $.getJSON(`http://localhost:3000/${path}`, function() {})
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            console.log("error");
        })
}