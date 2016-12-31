/**
 * Created by corne on 2016-05-08.
 */

var myAudio;
var playing = 0;

function playAudio() {
    myAudio = new Audio('johncena.mp3');
    if (typeof myAudio.loop == 'boolean')
    {
        myAudio.loop = true;
    }
    else
    {
        myAudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }
    myAudio.play();
    playing += 1;
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading') {

        if (playing == 0) {
            playAudio();
            console.error("Sound playing of John Cena has started!");
            console.log("The John Cena song has been played 1 time!");
        } else {
            myAudio.pause();
            myAudio.currentTime = 0;
            playAudio();
            console.log("The John Cena song has been played " + playing + " times!");
        }

    }
});