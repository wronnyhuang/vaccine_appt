# Get a vaccine appointment via healow (Rockville)
This script repeatedly clicks to check for an appointment. Alert when available slots show up.
Use on the appointment page for Rockville AHC Clinic (https://healow.com/apps/jsp/webview/openaccess/widgets/uc/ucFacility.jsp?apu_id=305868&facility_id=111).
  
Instructions:
1. Navigate to the appointment website
2. Cmd-shift-c to open developer mode in chrome
3. Open console tab
4. Paste and run [this script](main.js)


-----------------------

# Get a vaccine appointment via CVS
This script repeatedly clicks to check for an appointment. Alert when available slots show up.
https://www.cvs.com/immunizations/covid-19-vaccine.
  
Instructions:
1. The script runs fine right now on Firefox. It also runs on Google Chrome but CVS site is periodically glitchy with Chrome.
2. Navigate to any state that has availability (doesn’t have to be MD state). Then in the box that appears for the state you select, proceed to make an appointment. This way, it auto locks your selection as a Covid vaccine.
3. Fill out as much info as you can.
4. Enter a zip code of interest (it’ll search for several miles around that radius) and search for availability.
5. If there is no availability, run my script.
6. Open the browser console using Ctl+Shift+C on a PC or Cmd+Shift+C for a Mac
7. Go to the console tab and copy, paste, and press Enter for the script below
8. When an availability pops up, your computer should have a loud beep. Sometimes it doesn’t beep, but a dialog box will also appear in the browser. So it’s nice to keep an eye on it every now and then just in case it doesn’t beep
