const inputvalue=document.getElementById("h1input-block");
const baseurl="https://www.googleapis.com/youtube/v3";
const apiKey = "AIzaSyCeZUIC8xD_MS4OfQes9FqIy99VGi97tI4";


function renderUi(arr){
const container=document.getElementById("rightblockb2");

arr.forEach(element => {
    const videoblock=document.createElement("div");
    videoblock.className="videocard";

    videoblock.innerHTML = `
                    <div class="video-image">
                        <img src="${element.snippet.thumbnails.high.url}" alt="thumbnail">
                    </div>
                    <div class="video-desc">
                        <div class="ch-logo">
                            <img src="./header-images/User-Avatar.png" alt="">
                        </div>
                        <div class="vch-desc">
                            <p class="description">${element.snippet.description}</p>
                            <p class="ch-name">${element.snippet.channelTitle}</p>
                            <p class="views">1B views . 1 week ago</p>
                        </div>
                    </div>`;

    container.appendChild(videoblock);
});
}

async function fetchResults(){
    let searchvalue="modi";
    try{
    let response = await fetch(`${baseurl}/search?key=${apiKey}&part=snippet&q=${searchvalue}`);
    let data = await response.json();
    console.log(data.items);
    //renderUi(data.items); 
    }
    catch(e){
        console.log("some error occured")
    }
}
fetchResults();