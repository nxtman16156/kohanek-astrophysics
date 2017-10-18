var socket = io();
var currentSlide = 1;

window.onload = function() {
    var cw = $("#pauseplay").height();
    $("#pauseplay").css ("width", cw + "px");
    
    socket.emit ("connection_main");
    
    socket.on ("advance", function() {
        if (currentSlide < 10) currentSlide++;
        else currentSlide = 1;
        
        $("html, body").animate ({
            scrollTop: $("#scroll" + currentSlide).offset().top
        }, 1500);
    });
    
    socket.on ("play", function() {
        alert ("At this moment, the song should start playing");
    });
};