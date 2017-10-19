var socket = io();
var currentSlide = 1;

window.onload = function() {
    var cw = $("#pauseplay").height();
    $("#pauseplay").css ("width", cw + "px");
    
    socket.emit ("connection_main");
    
    socket.on ("advance", function() {
        if (currentSlide < 13) currentSlide++;
        else currentSlide = 1;
        
        scroll();
    });
    
    socket.on ("back", function() {
        if (currentSlide > 1) currentSlide--;
        else currentSlide = 13;
        
        scroll ();
    });
    
    socket.on ("play", function() {
        $("#audio").trigger("play");
    });
};

function scroll() {
    $("html, body").animate ({
        scrollTop: $("#scroll" + currentSlide).offset().top
    }, 1500);
}