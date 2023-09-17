

// // function getCookie(name) {
// //     const cookies = document.cookie.split('; ');
// //     for (const cookie of cookies) {
// //       const [cookieName, cookieValue] = cookie.split('=');
// //       if (cookieName === name) {
// //         return decodeURIComponent(cookieValue);
// //       }
// //     }
// //     return null; // Return null if the cookie doesn't exist
// //   }
// // function clearAllCookies() {
// //     const cookies = document.cookie.split('; ');
// //     for (const cookie of cookies) {
// //       const [cookieName, cookieValue] = cookie.split('=');
// //       // Set the cookie's expiration date to a past date
// //       document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
// //     }
// //   }
  


//   var apiKey = 'AIzaSyCeZUIC8xD_MS4OfQes9FqIy99VGi97tI4';

//   // Function to create and initialize the YouTube player
// let firstScript = document.getElementsByTagName("script")[0] ;
// firstScript.addEventListener("load", onLoadScript)
// function onLoadScript() {

//     // const vid_ID = getCookie("video_Id");
//     const vid_ID = "ehjvMGE5Ybg"
     
//  	if (YT) {
//     new YT.Player("aravind", {
//  	height: "500",
//  		width: "850",
//  		videoId: vid_ID,
//  		events: {
//  			onReady: (event) => {
//  				        document.title = event.target.videoTitle ;
//  		       	   }
//  	      }
//  	   });
//  	}

// }


// Replace 'YOUR_API_KEY' with your actual YouTube API Key
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        videoId: 'ehjvMGE5Ybg', // Replace 'VIDEO_ID' with the actual YouTube video ID
        playerVars: {
            autoplay: 1, // Auto-play the video
            controls: 1, // Show video controls
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    // You can do something when the player is ready
}

function onPlayerStateChange(event) {
    // You can handle player state changes here (e.g., video ended)
}

// Function to start playing the video
function playVideo() {
    if (player) {
        player.playVideo();
    }
}

// Function to pause the video
function pauseVideo() {
    if (player) {
        player.pauseVideo();
    }
}

// Function to stop the video
function stopVideo() {
    if (player) { 
        player.stopVideo();
    }
}


onYouTubeIframeAPIReady()