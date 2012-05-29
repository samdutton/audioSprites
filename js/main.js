// This demo is based on code at http://dev.w3.org/html5/spec/media-elements.html#text-track-api

$(document).ready(function(){

var audio = new Audio("audio/animalSounds.mp3");
 
// if track element supported
if (typeof audio.addTextTrack === "function") { 
  $(".isSupported").addClass("visible");
  $(".isNotSupported").addClass("hidden");
  
  
  audio.addEventListener("loadedmetadata", function(){
    var track = audio.addTextTrack("metadata", "sprite track", "en");    
		track.mode = TextTrack.HIDDEN;

    // for browsers that do not implement the getCueById() method
    if (typeof track.getCueById !== "function") { 
      track.getCueById = function(id){
        var cues = track.cues;        
        for (var i = 0; i != track.cues.length; ++i) {
          if (cues[i].id === id) {
            return cues[i];
          }
        }        
      };
    }

    track.addCue(new TextTrackCue("purr", 0.000, 1.875, ""));
    track.addCue(new TextTrackCue("kitten mew", 3.000, 4.000, ""));

    var endTime;
    audio.addEventListener("timeupdate", function (event) {
      if (event.target.currentTime > endTime)
        event.target.pause();
    });
        
    function playSound(id) {
        var cue = track.getCueById(id);
        audio.currentTime = cue.startTime;
        endTime = cue.endTime;
        audio.play();
    }
    
    $("button.playSound").click(function(){
      playSound(this.id);
    });
       
  });


// if track element not supported
} else {
  $(".isSupported").addClass("hidden");
  $(".isNotSupported").addClass("visible");

}

});