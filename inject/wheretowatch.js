$(document).ready(function() {
	//get anime name from kitsu url
	var animename = window.location.pathname;
	animename = animename.split("/").slice(-1)[0];
	//replace dashes with spaces
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
	
	//kissanime
	var kalink = "http://kissanime.ru/Search/Anime/" + animename;
	if($('#kissanime').length != 0){
        $('#kissanime').attr('href', kalink);
    }
    else {
        $('#illegallist').append('<li><a href="' + kalink + '" target="_blank" rel="noopener noreferrer" aria-label="Kissanime" class="hint--top hint--bounce hint--rounded" id="kissanime"><svg width="50" height="50" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg"><g id="layer101" fill="#55b002" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -22 52 -73 75 -73 7 0 15 -12 18 -27 7 -32 64 -73 101 -73 39 0 69 46 63 94 -4 30 -1 46 14 64 30 38 25 84 -13 121 -34 33 -92 43 -116 19 -9 -9 -12 -9 -12 0 0 16 -9 15 -50 -7z m138 -75 c6 -28 -10 -37 -45 -24 -27 10 -29 14 -19 30 14 24 59 20 64 -6z m-117 -36 c5 0 9 -4 9 -10 0 -5 -7 -7 -15 -4 -9 4 -14 17 -14 33 2 23 2 24 6 4 2 -13 9 -23 14 -23z m79 -80 c0 -13 -7 -20 -20 -20 -25 0 -27 27 -2 33 9 3 18 5 20 6 1 0 2 -8 2 -19z"/></g><g id="layer102" fill="#b93e61" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -52 88 -88 155 -63 22 8 24 13 15 30 -6 11 -21 20 -35 20 -40 0 -55 11 -54 39 2 22 2 23 6 4 4 -23 35 -39 54 -28 6 4 8 12 6 19 -8 20 20 48 45 44 21 -3 23 -7 20 -51 -4 -60 19 -74 55 -33 34 40 31 86 -9 125 -34 33 -92 43 -116 19 -9 -9 -12 -9 -12 0 0 16 -9 15 -50 -7z"/></g><g id="layer103" fill="#e30f84" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -52 88 -88 155 -63 22 8 24 13 15 30 -6 11 -21 20 -35 20 -40 0 -55 11 -54 39 2 23 2 24 6 4 2 -13 11 -23 18 -23 15 0 55 38 55 53 0 4 12 7 28 5 26 -3 27 -5 24 -49 -2 -40 0 -47 18 -52 27 -7 60 36 60 78 0 47 -51 95 -100 95 -20 0 -41 -5 -48 -12 -9 -9 -12 -9 -12 0 0 16 -9 15 -50 -7z"/></g><g id="layer104" fill="#adc109" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -52 88 -88 155 -63 22 8 24 13 15 30 -6 11 -21 20 -35 20 -61 0 -72 33 -30 94 40 59 33 69 -25 37z"/></g><g id="layer105" fill="#f8d009" stroke="none"><path d="M90 291 c-37 -19 -80 -82 -80 -118 0 -12 14 -33 31 -47 28 -24 37 -26 83 -20 28 4 52 8 54 9 7 6 -12 35 -24 35 -7 0 -25 5 -39 12 -32 15 -32 44 0 92 40 59 33 69 -25 37z"/></g></svg></a></li>');
    }
    
    //9anime
    var ninelink = "https://9anime.is/search?keyword=" + animename;
	if($('#nineanime').length != 0){
        $('#nineanime').attr('href', ninelink);
    }
    else {
        $('#illegallist').append('<li><a href="' + ninelink + '" target="_blank" rel="noopener noreferrer" aria-label="9anime" class="hint--top hint--bounce hint--rounded" id="nineanime"><svg width="50" height="50" viewBox="0 0 640 600" xmlns="http://www.w3.org/2000/svg"><g id="layer101" fill="#6c4fa3" stroke="none"><path d="M140 589 c-111 -13 -137 -38 -139 -136 l-1 -43 79 0 c70 0 80 2 93 23 15 21 22 22 143 22 114 0 128 -2 141 -19 8 -11 14 -33 14 -49 0 -24 -3 -28 -17 -22 -45 17 -196 27 -276 17 -153 -17 -180 -48 -175 -199 5 -155 31 -171 284 -172 328 -2 347 14 347 294 0 236 -17 267 -153 285 -89 11 -236 11 -340 -1z m317 -361 c16 -13 17 -50 1 -66 -14 -14 -255 -17 -276 -3 -8 5 -12 22 -10 42 3 33 5 34 53 41 66 8 216 -1 232 -14z"/></g></svg></a></li>');
    }
    
    //gogoanime
    var gogolink = "https://gogoanime.se//search.html?keyword=" + animename;
	if($('#gogoanime').length != 0){
        $('#gogoanime').attr('href', gogolink);
    }
    else {
        $('#illegallist').append('<li><a href="' + gogolink + '" target="_blank" rel="noopener noreferrer" aria-label="gogoanime" class="hint--top hint--bounce hint--rounded" id="gogoanime"><svg width="50" height="50" viewBox="0 0 320 270" xmlns="http://www.w3.org/2000/svg"><g id="layer101" fill="#1baf63" stroke="none"><path d="M108 243 c-24 -29 -54 -85 -73 -136 -24 -63 -13 -75 84 -89 82 -12 178 2 188 28 13 34 -53 137 -119 184 -47 35 -59 37 -80 13z"/></g><g id="layer102" fill="#77cfa2" stroke="none"><path d="M107 161 c-4 -18 -7 -45 -7 -58 0 -20 -4 -24 -20 -20 -11 3 -20 2 -20 -3 0 -21 79 -27 98 -8 9 9 12 9 12 -3 0 -12 2 -12 10 1 5 8 10 30 10 48 0 17 4 32 8 32 12 0 36 -29 55 -65 9 -16 16 -24 17 -17 0 28 -70 122 -92 122 -4 0 -8 -23 -8 -50 0 -36 -4 -52 -15 -57 -23 -8 -29 2 -35 60 -5 50 -6 51 -13 18z"/></g><g id="layer103" fill="#bae7d0" stroke="none"><path d="M112 150 c-2 -49 -9 -64 -32 -72 -10 -4 -6 -8 13 -13 16 -4 38 -3 50 3 l22 11 -22 0 c-20 1 -22 7 -26 59 -3 51 -3 53 -5 12z"/><path d="M181 138 c2 -30 3 -35 6 -15 5 33 10 33 41 5 28 -26 20 -5 -11 30 -29 32 -37 28 -36 -20z"/></g><g id="layer104" fill="#effaf4" stroke="none"><path d="M112 133 c-2 -45 -5 -52 -24 -56 -13 -2 0 -4 27 -4 28 0 40 2 28 4 -19 4 -23 12 -26 56 l-3 52 -2 -52z"/><path d="M181 143 c1 -37 2 -37 8 -8 4 20 9 26 14 18 5 -7 13 -13 18 -13 14 0 1 18 -22 30 -17 10 -19 7 -18 -27z"/></g></svg></a></li>');
    }
});
