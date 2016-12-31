/**
 * Created by corne on 2016-06-15.
 */

var myAudio;
var playing = 0;

function playAudio() {
    myAudio = new Audio('johncena.mp3');
    myAudio.play();
}

chrome.tabs.onActivated.addListener( function (tabId, changeInfo, tab) {
    /* if (changeInfo.status == 'loading' && tab.active) {*/

        playAudio();

    /*}*/
});