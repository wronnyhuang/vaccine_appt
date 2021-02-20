
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

var button = document.getElementById("vaccineinfo-MD");
var booked = document.getElementById("covid-nodata");
var keepgoing = 1;
for (let i = 0; i < 999999; i++) {
    button.click();
    for (let j = 0; j < 6; j++) {
        await sleep(1000);
        console.log("trial " + i + ", ping " + j);
        if (booked == ) {
		console.log("nothing");
            } else {
                beep(999, 200, 10000);
                alert("THERE REALLY IS SOMETHING!!!");
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
