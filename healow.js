
a=new AudioContext() // browsers limit the number of concurrent audio contexts, so you better re-use'em

function beep(vol, freq, duration){
  v=a.createOscillator()
  u=a.createGain()
  v.connect(u)
  v.frequency.value=freq
  v.type="square"
  u.connect(a.destination)
  u.gain.value=vol*0.01
  v.start(a.currentTime)
  v.stop(a.currentTime+duration*0.001)
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var button = document.getElementById("time-pref-evening");
var slots = document.getElementById("apptTimeSlotsXhrDiv");
var keepgoing = 1;
for (let i = 0; i < 999999; i++) {
    button.click();
    for (let j = 0; j < 6; j++) {
        await sleep(1000);
        console.log("trial " + i + ", ping " + j);
        if (slots.children.length > 0) {
            if (slots.children[0].id == "OALoaderDiv") {
                console.log("it's just the loader");
            } else if (slots.outerText == "No appointment availabilities.") {
                console.log("No appointment availabilities");
            } else {
                beep(999, 200, 500);
                keepgoing = 0;
	            break;
            }
        } else {
            console.log("no elements in slots");
        }
    }
    if (keepgoing == 0) {
        break;
    }
}
