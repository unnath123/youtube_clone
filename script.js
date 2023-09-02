// const inputvalue=document.getElementById("h1input-block");
// const baseurl="https://www.googleapis.com/youtube/v3";
// const apiKey = "AIzaSyCeZUIC8xD_MS4OfQes9FqIy99VGi97tI4";


// function VideoClicked(element){
//     // console.log("here");
//     console.log(element);
   
// }

// function renderUi(arr){
// const container=document.getElementById("rightblockb2");

// arr.forEach(element => {
//     const videoblock=document.createElement("div");
//     videoblock.className="videocard";

//     videoblock.innerHTML = `
//                     <div class="video-image" onclick="VideoClicked('${element.id.videoId}')">
//                         <img src="${element.snippet.thumbnails.high.url}" alt="thumbnail">
//                     </div>
//                     <div class="video-desc">
//                         <div class="ch-logo">
//                             <img src="${element.channelLogo}" alt="channel_logo">
//                         </div>
//                         <div class="vch-desc">
//                             <p class="description">${element.snippet.description}</p>
//                             <p class="ch-name">${element.snippet.channelTitle}</p>
//                             <p class="views">${element.Statistics.viewCount} views . 1 week ago</p>
//                         </div>
//                     </div>`;

//     container.appendChild(videoblock);
// });
// }

// async function getChannelLogo(chId){
//     try{
//         let response=await fetch(`${baseurl}/channels?key=${apiKey}&part=snippet&id=${chId}`);
//         let data=await response.json();
//         return data.items[0].snippet.thumbnails.high.url
//     }
//     catch(e){
//         alert("something went wrong");
//     }
// }

// async function getChannelStats(vdId){
//     let response = await fetch(`${baseurl}/videos?key=${apiKey}&part=statistics&id=${vdId}`); 
//     let data = await response.json();

//     return data.items[0].statistics;
// }

// async function fetchResults(){
//     let searchvalue="modi";
//     try{
//     let response = await fetch(`${baseurl}/search?key=${apiKey}&part=snippet&q=${searchvalue}&type=video`);
//     let data = await response.json();

//     for(let i=0;i<(data.items).length;i++){
//         let currentvdID=data.items[i].id.videoId;
//         let currentchID=data.items[i].snippet.channelId;

//         const ch_logo= await getChannelLogo(currentchID);
//         const statistics= await getChannelStats(currentvdID);

//         data.items[i].channelLogo=ch_logo;
//         data.items[i].Statistics=statistics;
//     }
//     console.log(data.items);
//     renderUi(data.items); 
//     }
//     catch(e){
//         console.log("some error occured")
//     }
// }
// fetchResults();

