var socket = io.connect('http://localhost:3000');

socket.on('message', function(message) {

    console.log('Le serveur a un message pour vous : ');
    console.log(message);

})