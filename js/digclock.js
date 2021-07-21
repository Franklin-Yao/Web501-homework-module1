function currentTime(){
    //Declare variables
    var d = new Date();
    var hr = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    var ampm; // AM or PM

    //Add 0 to single digits for seconds
    if (sec < 10){
        sec = "0" + sec;
    }
    // Add 0 to single digits for minutes
    if (min < 10){
        min = "0" + min;
    }

    // Determine AM or PM string
    if (hr == 12){
        ampm == "PM";
    } else if (hr > 12){
        hr -= 12;
        ampm = "PM";
    } else{
        ampm = "AM";
    }

    var urchr = d.getUTCHours();
    if (urchr > 12){
        urchr -= 12;
    }

    var timeDiff = urchr - hr;
    var adjTimeDiff;
    var timeZone;
    if (timeDiff < 0){
        adjTimeDiff = -timeDiff;
    } else{
        adjTimeDiff = timeDiff;
    }
    
    switch(adjTimeDiff){
        case 8:
            timeZone = "ET";
            break;
        case 7:
            timeZone = "CT";
            break;
        case 6:
            timeZone = "MT";
            break
        case 5:
            timeZone = "PT";
            break
        default:
            timeZone = "Unknown Timezone";
    }
    

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;
    document.getElementById("clock").innerText = time;
}

setInterval(currentTime, 1000);