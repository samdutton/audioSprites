// This demo is based on code at http://dev.w3.org/html5/spec/media-elements.html#text-track-api

$(document).ready(function(){

var audio = new Audio('audio/sprites.mp3');

// if track element supported
if (typeof audio.addTextTrack === "function") { 
  $(".isSupported").addClass("visible");
  $(".isNotSupported").addClass("hidden");

// if track element not supported
} else {
  $(".isSupported").addClass("hidden");
  $(".isNotSupported").addClass("visible");

}

// 
//   var track = audio.addTextTrack('metadata');
//     
//   track.addCue(new TextTrackCue('dog bark', 12.783, 13.612, '', '', '', true));
//   track.addCue(new TextTrackCue('kitten mew', 13.612, 15.091, '', '', '', true));
//   
//   function playSound(id) {
//     audio.currentTime = track.getCueById(id).startTime;
//     audio.play();
//   }
//   
//   playSound('dog bark');
//   playSound('kitten mew');
} 
});