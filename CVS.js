
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
	

	var button = document.getElementsByClassName('submit btn-control')[0];
	var slots = document.getElementsByClassName('store-list-container')[0];
	var keepgoing = 1;

	async function letsGo() {
	    for (let i = 0; i < 999999; i++) {
	        button.click();
	        for (let j = 0; j < 6; j++) {
	            await sleep(2000);
	            console.log("trial " + i + ", ping " + j);
	            if (slots.innerHTML[221] == "N" || slots.innerText.length == 293) {
	                console.log("nothing available")
                  } else {
	                    beep(999, 200, 10000);
	                    alert("THERE REALLY IS SOMETHING!!!");
	                    keepgoing = 0;
		                break;
	                }
	        }
	        if (keepgoing == 0) {
	            break;
	        }
	    }
         }

letsGo()
