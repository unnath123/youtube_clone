

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null; // Return null if the cookie doesn't exist
  }
function clearAllCookies() {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      // Set the cookie's expiration date to a past date
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }
  


  var apiKey = 'AIzaSyCeZUIC8xD_MS4OfQes9FqIy99VGi97tI4';

  // Function to create and initialize the YouTube player
let firstScript = document.getElementsByTagName("script")[0] ;
firstScript.addEventListener("load", onLoadScript)
function onLoadScript() {

    const vid_ID = getCookie("video_Id");
     
 	if (YT) {
    new YT.Player("aravind", {
 	height: "500",
 		width: "850",
 		videoId: vid_ID,
 		events: {
 			onReady: (event) => {
 				        document.title = event.target.videoTitle ;
 		       	   }
 	      }
 	   });
 	}

}
