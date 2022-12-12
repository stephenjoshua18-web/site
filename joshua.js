/* write a javascript code to create a voice assistant and name the voice assistant joshua. the voice assistant will listen when i say open youtube and play any songs and it will do so while openeing youtube from chrome browser */

var joshua = new webkitSpeechRecognition();
joshua.continuous = true;
joshua.interimResults = true;
joshua.lang = 'en-US';
joshua.start();
joshua.onresult = function(event) {
  for (var i = event.resultIndex; i < event.results.length; ++i) {
    if (event.results[i].isFinal) {
      if (event.results[i][0].transcript.toLowerCase() == 'open youtube') {
        window.open('https://www.youtube.com/');
      }
    }
  }
};
