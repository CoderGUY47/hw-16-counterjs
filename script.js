let heading = document.querySelectorAll(".heading");
let colors = ["#D91656", "#9BEC00", "#3572EF", "#FFB22C", "#433878", "#EF5A6F"];
let arr = Array.from(heading);

arr.map(item => {
    if (item.dataset.num) 
    {
        let count = -1; // for starting from -1 to display 00 first
        function counterjs() {
            count++;
            let TwoDgtCount;
            if (count < 10) 
            {
                TwoDgtCount = '0' + count;
            } 
            else 
            {
                TwoDgtCount = '' + count;
            }

            item.innerHTML = `${TwoDgtCount}+`;
            item.style.color = colors[count % colors.length];

            if(count==item.dataset.num) 
            {
                count = -1;
            }
        }
        setInterval(counterjs, item.dataset.spd);
    }
});


let textHeading = document.querySelector(".hFive");
let textCount = 0;
let currentState = 0; 
let originalText = textHeading.dataset.text;

function typeJs(){
    if(currentState === 0)
    {
        if(textCount < originalText.length)
        {
            textHeading.innerHTML += originalText.charAt(textCount);
            textHeading.style.color = colors[textCount % colors.length];
            textCount++;
        } 
        else
        {
            currentState = 1;
            textCount = originalText.length - 1;
            textHeading.innerHTML = "";
        }
    }
    else if (currentState === 1)
    {
        // for reversing the text
        if(textCount >= 0)
        {
            textHeading.innerHTML += originalText.charAt(textCount);
            textHeading.style.color = colors[textCount % colors.length];
            textCount--;
        } 
        else 
        {
            textHeading.innerHTML = ""; 
            currentState = 0;
            textCount = 0;
        }
    }
}

setInterval(typeJs, 400); 





