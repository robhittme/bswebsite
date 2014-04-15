$(document).ready(function() {
console.log ("ready")
var menuItems = ["<a href=index.html>Home</a>", "<a href=bio.html>Bio</a>", "<a href=video.html>Video</a>", "<a href=http://www.robertphitt.wordpress.com>Blog</a>"];
var jobEntry = ["Duvall Catering", "Hamby's Catering","Bicycle Shoppe","Jack's Cafe"];
var menuItemTemplate = function(links) {
	var i;
	var markup ="";
	for(i=0;i<links.length;i++) {
		markup += "<li>" + links[i] + "</li>";
	}
	return markup;
	console.log(markup)
};

$(".nav-pills").append(menuItemTemplate(menuItems));
$(".joblist").append(menuItemTemplate(jobEntry));


var socialItems = ["<a href=http://www.facebook.com/robertpaulproductions><img src=images/02_facebook.png></a>",
            "<a href=http://vimeo.com/robertpaulproductions><img src=images/09_vimeo.png ></a>",
            "<a href=http://www.twitter.com/RobHittMe><img src= images/01_twitter.png></a>",
            "<a href=http://www.instagram.com/rpproduction><img src=images/10_instagram.png></a>",
            "<a href=http://www.linkedin.com/pub/robert-hitt/80/68/71a><img src=images/07_linkedin.png></a>" ];
var socialItemsTemplate = function(icons) {
	var i; 
	var markup= "";
	for (i=0; i<icons.length; i++) {
		markup += icons[i];
	}
	return markup;
};

$(".social").append(socialItemsTemplate(socialItems));


$.each()
});

