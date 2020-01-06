"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Alexa
   Date:   1/6/2020
   
   Filename: hg_report.js
	
*/

// write information about the game using HTML for the game summary
var gameReport;
gameReport = "<h1>" + itemTitle + "</h1>";
gameReport += "<h2>By:" + itemManufacturer + "</h2>";
gameReport += "<img src='hg_" + itemID + ".png' alt='" +itemID + "' id='gameImg' />";
gameReport += "<table>";
gameReport += "<tr><th>Product ID</th><td>" + itemID + "</td></tr>";
gameReport += "<tr><th>List Price</th><td>" + itemPrice + "</td></tr>";
gameReport += "<tr><th>Platform</th><td>" + itemPlatform + "</td></tr>";
gameReport += "<tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr>";
gameReport += "<tr><th>Condition</th><td>" + itemCondition + "</td></tr>";
gameReport += "<tr><th>Release</th><td>" + itemRelease + "</td></tr>";
gameReport += "</table>";
gameReport += itemSummary;

//put the summary in the first/only article element
document.getElementsByTagName("article")[0].innerHTML = gameReport;

//calculate the average customer rating of the game
var ratingsSum = 0;
var ratingsCount = ratings.length;
//loop through the ratings array
for (var i=0; i<ratingsCount; i++) {
	ratingsSum += ratings[i];
}

var ratingsAvg = ratingsSum / ratingsCount;

//Create a rating report to display the first 3 customer reviews
var ratingReport;
ratingReport = "<h1> Customer Reviews </h1>";
ratingReport += "<h2>" + ratingsAvg + "out of 5 stars (" + ratingsCount + "reviews) </h2>";

for (var i = 0; i < 3; i++) {
	ratingReport += "<div class='review'>";
	ratingReport += "<h1>" + ratingTitles[i] + "</h1>";
	ratingReport += "<table>";
	ratingReport += "<tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr>";
	ratingReport += "<tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr>";
	ratingReport += "<tr><th>Rating</th><td>";
	
	//nested for loop to display rating stars graphically
	for (var k = 1; k <= ratings; k++) {
		ratingReport += "<img src='hg_star.png' />";
	}
	
	ratingReport += "</td></tr></table>";
	ratingReport += ratingSummaries[i];
	ratingReport += "</div>";
}

//write the ratingReport in the first/only aside element
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;