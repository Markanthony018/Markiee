import {YoutubeRedesign, UI} from './model.js';

const youtubeRedesign = new YoutubeRedesign();


const ui = new UI();

// tinawag ko lang yung form ito yung form sa may search or input fields
const myform = document.querySelector("#myform");

// kapag nag submit si user ng data
myform.addEventListener('submit', (e) => {
    // prevent from loosing the data itself
    e.preventDefault();

    // tinawag lang natin yung search 
    const searchVideo = document.querySelector('#search').value;

    // nagbubura lang ng laman ng banner
    ui.clearBanner();
    // nagbubura lang ng search 
    ui.clearFields();
    
    // kapag yung search may laman tas inenter ng user
    if(searchVideo !== ''){
        // fetch the data from the api
        // nagrereturn lang 
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

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
