
var firebase = require('firebase')

const config = {
    apiKey: "AIzaSyArRlLR0d1oNDzZquaqjYPJx5_64gGiqco",
    authDomain: "demoluisfelipe.firebaseapp.com",
    databaseURL: "https://demoluisfelipe.firebaseio.com",
    projectId: "demoluisfelipe",
    storageBucket: "demoluisfelipe.appspot.com",
    messagingSenderId: "1022402695664",
    appId: "1:1022402695664:web:a02d2d456e743890b9cd35"
}

var fire = firebase.initializeApp(config)
module.exports = fire