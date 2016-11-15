
$(document).ready(function(){
	$("#coverart").click(function(){
		//setting up the page by hiding the cd and adding title
		$("#coverart").hide();
		$("body").append('<h1>Favorite Songs </h1>');
		$.getJSON("lab4.json", function(playlist) {
			var picture;
			//where i gather and do all the data
			for(var i in playlist.songs) {
				//getting and setting up variables
				var genres ="<b>Genre: </b>";
				//id = i allows me to have different id names for all songs
				$("body").append('<div class="info" id="' + i +'"></div>');
				var song = playlist.songs[i].song;
				var artist = playlist.songs[i].artist;
				var album = playlist.songs[i].album;
				var albumLink = playlist.songs[i].album_link;
				picture = playlist.songs[i].album_picture;
				var releaseDate = playlist.songs[i].releaseDate;
				var songNum = i;
				//Just appending the info to the div ul also parseInt is just so I can increment
				//the song number
				$("#" + i).append("<h2>" + (parseInt(songNum, 10) + 1) + ". " + song + "</h2>");
				$("#" + i).append("<ul id='ul" + i + "'></ul>");
				$("<li id='Artist"+i+"'></li>").html('<b>Artist</b>: ' + artist).appendTo("#ul" + i);
				$("<li id='AlbumName"+i+"'></li>").html('<b>Album Name</b>: <a href="' + 
					albumLink + '">' + album + "</a>").appendTo("#ul" + i);
				$("<li id='ReleaseDate"+i+"'></li>").html('<b>Release Date</b>: ' 
					+ releaseDate).appendTo("#ul" + i);
				//for genres since they were in an array I had to go through the array and append
				//the songs one by one
				for(var j =0; j < playlist.songs[i].genre.length; j++) {
					genres += playlist.songs[i].genre[j];
					if(j+1!=playlist.songs[i].genre.length) {
						genres += "/";
					}
				}
				//Ending the list then adding a picture div and picture
				$("<li id='Genres"+i+"'></li>").html(genres).appendTo("#ul" + i);
				$("body").append("<div class='picture' id='pic" + i + "'></div>");
				$("#pic" + i).append("<img src='" + picture + "'>");
			}
		});
	}); 
});