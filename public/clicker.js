var socket = io();

window.onload = function() {
    var cw = $(".my_button").width();
    $(".my_button").css("height", cw + "px");
    
    $("#play").click(function() {
        socket.emit ("play");
    });
    
    $(".my_button").click(function() {
        socket.emit ("advance");
    });
    
    $("#back").click(function() {
        socket.emit ("back");
    });
};