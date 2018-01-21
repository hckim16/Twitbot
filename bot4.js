console.log("The bot is starting");

var Twit = require('twit')

var config = require("./config");

var T = new Twit(config);

//1000 is 1 second
setInterval(tweetIt, 1000)

tweetIt();

function tweetIt(){

    //uses random function to make each tweet unique
    var r = Math.floor(Math.random()*100);

    var tweet ={
        status: '#My tweet from node.js using my twitbot with random number ' + r;
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
