console.log("The bot is starting");

var Twit = require('twit')

var config = require("./config");

var T = new Twit(config);

tweetIt();

function tweetIt(){

    var r = Math.random(Math.random()*100);

    var tweet ={
        status: '#My second practice tweet from node.js using my twitbot with random number' + r 
    }
    
    T.post('statuses/update', tweet, tweeted);
    
    function tweeted(err, data, response) {
        if(err){
            console.log("Something went wrong")
        }
        else{
            console.log("It worked");
        }
      }
}
