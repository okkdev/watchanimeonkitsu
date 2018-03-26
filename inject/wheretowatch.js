$(document).ready(function() {
	//get anime name from kitsu url
	var animename = window.location.pathname;
	animename = animename.split("/").slice(-1)[0];
	//squeeze it together to fit the most of it into the length limit
	animename = animename.replace(/-/g, ' ');
	
	//add illegal streaming list
	if($('#illegalstream').length == 0){
		$('.media-sidebar').append('<div class="where-to-watch-widget" id="illegalstream"><span class="where-to-watch-header"><span>Watch Illegally Online</span></span><ul class="nav" id="illegallist"></div>');
	}

	//build ma api search link (trim the string to the maximum query length of masterani api)
	var masearch = "https://www.masterani.me/api/anime/search?search=" + animename.substr(0, 30) + "&sb=true&format=json";
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
	
	//too lazy to query kissanime. masterani is superior anyway
	var kalink = "http://kissanime.ru/Search/Anime/" + animename;
	if($('#kissanime').length != 0){
        $('#kissanime').attr('href', malink);
    }
    else {
        $('#illegallist').append('<li><a href="' + kalink + '" target="_blank" rel="noopener noreferrer" aria-label="Kissanime" class="hint--top hint--bounce hint--rounded" id="kissanime"><svg width="50" height="50" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><g id="layer101" fill="#55b002" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -22 52 -73 75 -73 7 0 15 -12 18 -27 7 -32 64 -73 101 -73 39 0 69 46 63 94 -4 30 -1 46 14 64 30 38 25 84 -13 121 -34 33 -92 43 -116 19 -9 -9 -12 -9 -12 0 0 16 -9 15 -50 -7z m138 -75 c6 -28 -10 -37 -45 -24 -27 10 -29 14 -19 30 14 24 59 20 64 -6z m-117 -36 c5 0 9 -4 9 -10 0 -5 -7 -7 -15 -4 -9 4 -14 17 -14 33 2 23 2 24 6 4 2 -13 9 -23 14 -23z m79 -80 c0 -13 -7 -20 -20 -20 -25 0 -27 27 -2 33 9 3 18 5 20 6 1 0 2 -8 2 -19z"/></g><g id="layer102" fill="#b93e61" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -52 88 -88 155 -63 22 8 24 13 15 30 -6 11 -21 20 -35 20 -40 0 -55 11 -54 39 2 22 2 23 6 4 4 -23 35 -39 54 -28 6 4 8 12 6 19 -8 20 20 48 45 44 21 -3 23 -7 20 -51 -4 -60 19 -74 55 -33 34 40 31 86 -9 125 -34 33 -92 43 -116 19 -9 -9 -12 -9 -12 0 0 16 -9 15 -50 -7z"/></g><g id="layer103" fill="#e30f84" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -52 88 -88 155 -63 22 8 24 13 15 30 -6 11 -21 20 -35 20 -40 0 -55 11 -54 39 2 23 2 24 6 4 2 -13 11 -23 18 -23 15 0 55 38 55 53 0 4 12 7 28 5 26 -3 27 -5 24 -49 -2 -40 0 -47 18 -52 27 -7 60 36 60 78 0 47 -51 95 -100 95 -20 0 -41 -5 -48 -12 -9 -9 -12 -9 -12 0 0 16 -9 15 -50 -7z"/></g><g id="layer104" fill="#adc109" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -52 88 -88 155 -63 22 8 24 13 15 30 -6 11 -21 20 -35 20 -61 0 -72 33 -30 94 40 59 33 69 -25 37z"/></g><g id="layer105" fill="#f8d009" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -12 14 -33 31 -47 28 -24 37 -26 83 -20 28 4 52 8 54 9 7 6 -12 35 -24 35 -7 0 -25 5 -39 12 -32 15 -32 44 0 92 40 59 33 69 -25 37z"/></g></svg></a></li>');
    }
});