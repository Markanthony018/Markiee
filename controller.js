import {YoutubeRedesign, UI} from './model.js';

const youtubeRedesign = new YoutubeRedesign();


const ui = new UI();

const myform = document.querySelector("#myform");

myform.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchVideo = document.querySelector('#search').value;

    ui.clearBanner();
    ui.clearFields();
    

    if(searchVideo !== ''){
     
        youtubeRedesign.getLatestVideo(searchVideo).then((data) => {
            console.log(data);
            if(data.pageInfo.totalResults === 0){
                alert("Nothing Found. Please Try Again!");
                ui.clearBanner();
                ui.clearFields();
            } else {
                ui.showResult(data);
                
            }
        });
    }
});

function callme(x,y,z,a){
    // tinawag ko lang si banner
    const banner = document.querySelector("#playing");

    // tinawag ko yung channelTitle
    const channelTitle = document.querySelector("#channel");

    // tinawag ko yung description-content
    const descriptionContent = document.querySelector("#description");

    // tinawag ko yung youtube-profile
    const title = document.querySelector("#title");

    const youtubeProfile = document.querySelector("#other")

    // delete ko lang yung laman ni banner which is iframe
    banner.innerHTML = '';

    // gawa muna ko element tapos pasa ko yung value ni videoId
    banner.innerHTML = `<iframe class="embed-responsive-item" height="420" width="644" src="https://www.youtube.com/embed/${x}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `;

    // papalitan ko yung laman ni channelTitle
    channelTitle.innerHTML = `<i sclass="fas fa-video"></i> ${y}`;

    // papalitan ko yung laman ni description-content
    descriptionContent.innerHTML = z;

    // magseset tayo ng src at yung laman ay yung thumbnail
    youtubeProfile.setAttribute("src", a);
}


document.querySelector("#myform").addEventListener('submit', function(){
    const otherVideos = document.querySelector("#other");
    otherVideos.innerHTML = "";
})