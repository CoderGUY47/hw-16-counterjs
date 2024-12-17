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














// let heading = document.querySelectorAll(".heading");
//         let colors = ["#D91656", "#9BEC00", "#3572EF", "#FFB22C", "#433878", "#EF5A6F"];
//         let arr = Array.from(heading);

//         arr.map(item => {
//             if (item.dataset.num) { // Check if the item has a data-num attribute
//                 let count = -1; // Start from -1 to display 00 first
//                 function counterjs() {
//                     count++;
//                     let TwoDgtCount;
//                     if (count < 10) {
//                         TwoDgtCount = '0' + count; // Format to two digits
//                     } else {
//                         TwoDgtCount = count;
//                     }
//                     item.innerHTML = `${TwoDgtCount}+`;
//                     item.style.color = colors[count % colors.length]; // Cycling colors

//                     if (count == item.dataset.num) {
//                         count = -1; // Reset count to -1 to start from 00 again
//                     }
//                 }
//                 let stop = setInterval(() => {
//                     counterjs();
//                 }, item.dataset.spd);
//             }
//         });

//         // Text showing functionality
//         let textHeading = document.querySelector(".hFive");
//         let textCount = 0;

//         function typeJs() {
//             textHeading.innerHTML += textHeading.dataset.text.charAt(textCount);
//             textHeading.style.color = colors[textCount % colors.length]; // Cycling colors for text
//             textCount++;
//             if (textCount == textHeading.dataset.text.length + 1) {
//                 textHeading.innerHTML = "";
//                 textCount = 0;
//             }
//         }

//         let textStop = setInterval(() => {
//             typeJs();
//         }, 1000);




// let heading = document.querySelectorAll(".heading");
// let colors = ["#D91656", "#9BEC00", "#3572EF", "#FFB22C", "#433878", "#EF5A6F"];
// let arr = Array.from(heading);

// arr.map(item => {
//     if (item.dataset.num) { // Check if the item has a data-num attribute
//         let count = -1; // Start from -1 to display 00 first
//         function counterjs() {
//             count++;
//             let TwoDgtCount;
//             if (count < 10) {
//                 TwoDgtCount = '0' + count; // Format to two digits
//             } else {
//                 TwoDgtCount = count;
//             }
//             item.innerHTML = `${TwoDgtCount}+`;
//             item.style.color = colors[count % colors.length]; // Cycling colors

//             if (count == item.dataset.num) {
//                 count = -1; // Reset count to -1 to start from 00 again
//             }
//         }
//         let stop = setInterval(() => {
//             counterjs();
//         }, item.dataset.spd);
//     }
// });

// // Text showing functionality
// let textHeading = document.querySelector(".hFive");
// let textCount = 0;
// let isReversing = false; // Flag to check if we are reversing the text
// let originalText = textHeading.dataset.text; // Store the original text

// function typeJs() {
//     if (!isReversing) {
//         // Display the text character by character
//         if (textCount < originalText.length) {
//             textHeading.innerHTML += originalText.charAt(textCount);
//             textHeading.style.color = colors[textCount % colors.length]; // Cycling colors for text
//             textCount++;
//         } else {
//             // Start reversing after displaying all characters
//             isReversing = true;
//             textCount = originalText.length - 1; // Set textCount to the last index
//             setTimeout(() => {
//                 textHeading.innerHTML = ""; // Clear the text before starting to reverse
//             }, 1000); // Wait for 1 second before starting to reverse
//         }
//     } else {
//         // Reverse the text character by character
//         if (textCount >= 0) {
//             textHeading.innerHTML += originalText.charAt(textCount); // Display one character
//             textHeading.style.color = colors[textCount % colors.length]; // Set color for the text
//             textCount--;
//         } else {
//             // Clear the text after reversing
//             setTimeout(() => {
//                 textHeading.innerHTML = ""; // Clear the text
//                 isReversing = false; // Reset the reversing flag
//                 textCount = 0; // Reset textCount for the next cycle
//             }, 1000); // Wait for 1 second before resetting
//         }
//     }
// }

// let textStop = setInterval(() => {
//     typeJs();
// }, 1000); // Adjust the interval as needed (e.g., 1000 ms for 1 second)








