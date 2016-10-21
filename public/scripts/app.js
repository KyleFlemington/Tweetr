$(function(){

	var data = [
	  {
	    "user": {
	      "name": "Newton",
	      "avatars": {
	        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
	        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
	        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
	      },
	      "handle": "@SirIsaac"
	    },
	    "content": {
	      "text": "If I have seen further it is by standing on the shoulders of giants"
	    },
	    "created_at": 1461116232227
	  },
	  {
	    "user": {
	      "name": "Descartes",
	      "avatars": {
	        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
	        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
	        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
	      },
	      "handle": "@rd" },
	    "content": {
	      "text": "Je pense , donc je suis"
	    },
	    "created_at": 1461113959088
	  },
	  {
	    "user": {
	      "name": "Johann von Goethe",
	      "avatars": {
	        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
	        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
	        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
	      },
	      "handle": "@johann49"
	    },
	    "content": {
	      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
	    },
	    "created_at": 1461113796368
	  }
	];

	function renderTweets(tweets) {
		tweets.forEach(function(posts){
			var posting = createTweetElement(posts);
				$('#tweets-container').prepend(posting);
		});
		return true;
	}

	function createTweetElement(tweet) {
	  var $tweet = $('<article>').addClass('tweet');
	  var timeSince = Math.floor(((Date.now() - tweet.created_at) / (86400000)));
	 
	  var $name = $('<h3>' + tweet.user.name + '</h3>');
	  var $handle = $('<h4>' + tweet.user.handle +'</h4>');
	  var $avatar = $( '<img src="' + tweet.user.avatars.small +'" width="50px" height="50px" />' );
	  var $content = $('<p>' + tweet.content.text + '</p>');
	  var $created_at = $('<footer>' + timeSince + " Days ago" +  '<span class="glyphicon glyphicon-flag"></span><span class="glyphicon glyphicon-retweet"></span><span class="glyphicon glyphicon-heart"></span></footer>');

	  var $header = $('<header></header>');


	  $header.append($avatar);
	  $header.append($name);
	  $header.append($handle);

	  $tweet.append($header);
	  $tweet.append($content);
	  $tweet.append($created_at);

	  return $tweet;
	}


 $("form").on("submit", function(event) {
  	event.preventDefault();
  	$.ajax ({
      url: '/tweets/',
      method: 'post',
      data: $(this).serialize(),
      success: function (data) {
      	renderTweetsFromServer();
      },
      error: function() {
      	alert("Cannot Tweet with out a Tweet")
      }
	  });
	})

 function renderTweetsFromServer() {
 	$.ajax ({
 		url: "/tweets",
 		method: "get",
 		success: function (data) {
 			renderTweets(data);
 		}
 	})
 }

 renderTweetsFromServer();

});


