var currentHour = 0;
var currentMin = 0;
var currentSec = 0;
var currentMilisec = 0;
var outputHour = document.getElementById("outputHour");
var outputMinute = document.getElementById("outputMinute");
var outputSec = document.getElementById("outputSec");
var outputMilisec = document.getElementById("outputMilisec");
var startBtn = document.getElementById("startBtn");
var stopBtn = document.getElementById("stopBtn");
var stopWatch;



function StartClock()
{
    startBtn.style.display = "none";
    stopBtn.style.display = "inline-block";
    stopWatch = setInterval(myClock, 10);
}

function StopClock(){
    startBtn.style.display = "inline-block";
    stopBtn.style.display = "none";
    clearInterval(stopWatch);
}

function ResetClock(){
    StopClock();
    outputHour.innerHTML = "00";
    outputMinute.innerHTML = "00";
    outputSec.innerHTML = "00";
    outputMilisec.innerHTML = "00";
    currentHour = 0;
    currentMin = 0;
    currentSec = 0;
}

function myClock()
{
    currentMilisec++;
    if(currentMilisec == 100)
    {
        currentMilisec = 0;
        currentSec++;
        if(currentSec == 60)
        {
            currentSec = 0;
            currentMin++;
            if(currentMin == 60)
            {
                currentMin = 0;
                currentHour++;
                if(currentHour == 24)
                {
                    currentHour = 0;
                }
                outputHour.innerHTML = FormatTime(currentHour);
            }
            outputMinute.innerHTML = FormatTime(currentMin);
        }
        outputSec.innerHTML = FormatTime(currentSec);
    }  
    outputMilisec.innerHTML = FormatTime(currentMilisec);
}

function FormatTime(time)
{
    var formatedTime
    if(time < 10)
    {
        formatedTime = "0" + time.toString();
    }
    else
    {
        formatedTime = time.toString();
    }
    return formatedTime
}