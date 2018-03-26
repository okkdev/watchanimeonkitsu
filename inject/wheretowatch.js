$(document).ready(function() {
	//get anime name from kitsu url
	var animename = window.location.pathname;
	animename = animename.split("/").slice(-1)[0];
	//squeeze it together to fit the most of it into the length limit
	animename = animename.replace(/-/g, '');
	//trim the string to the maximum query length of masterani api
	animename = animename.substr(0, 30);
	
	//add illegal streaming list
	if($('#illegalstream').length == 0){
		$('.media-sidebar').append('<div class="where-to-watch-widget" id="illegalstream"><span class="where-to-watch-header"><span>Watch Illegally Online</span></span><ul class="nav" id="illegallist"></div>');
	}
	
	//build ma api search link
	var masearch = "https://www.masterani.me/api/anime/search?search=" + animename + "&sb=true&format=json";
	//query api, build link and add button to list
	$.getJSON(masearch, function(data) {
        var malink = "https://www.masterani.me/anime/info/" + data["0"].slug;
        if($('#masterani').length != 0){
            $('#masterani').attr('href', malink);
        }
        else {
        	$('#illegallist').append('<li><a href="' + malink + '" target="_blank" rel="noopener noreferrer" aria-label="Masterani" class="hint--top hint--bounce hint--rounded" id="masterani"><svg width="50" height="50" viewBox="0 0 1280 1280" xmlns="http://www.w3.org/2000/svg"><g fill="#e30813" stroke="none"><path d="M355 1116 c-129 -41 -217 -148 -250 -303 -8 -38 -15 -90 -15 -116 0 -56 24 -181 45 -232 l15 -35 -52 20 c-29 11 -54 20 -55 20 -11 0 5 -25 50 -78 200 -236 484 -323 760 -231 220 73 357 280 357 539 0 98 -17 167 -63 253 -51 97 -147 161 -259 174 l-53 6 64 -49 c35 -26 59 -50 52 -52 -6 -2 10 -27 37 -57 66 -72 78 -147 46 -303 -14 -72 -83 -231 -119 -277 -16 -20 -17 -20 -41 10 -13 17 -50 80 -81 140 -53 101 -58 108 -63 80 -4 -25 -10 -14 -38 75 -18 58 -32 111 -32 118 0 24 -19 11 -43 -30 -41 -71 -77 -166 -112 -303 -18 -71 -37 -131 -42 -132 -18 -6 -113 100 -142 159 -82 164 -61 352 55 493 40 50 37 55 -16 24 -34 -19 -33 -18 10 23 25 24 56 51 70 60 l25 17 -35 0 c-19 0 -53 -6 -75 -13z"/></g></svg></a></li>');
        }
	});
});