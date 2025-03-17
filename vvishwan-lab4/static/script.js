let x = 5;
let y = 7;
let z = x + y;
console.log(z);
let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2){
    const x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C.length == z){
    console.log("good job!");
} else if(C.length < z){
    console.log(z);
} else {
    console.log(C);
}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];
/*
function findTheBanana(arr1){
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] == "Banana"){
            alert("found a banana at " + i);
        }
    }
}
findTheBanana(L1);
findTheBanana(L2);

L1.forEach(function (item){
    if(item == "Banana"){
        alert("We found a banana in the first array");
    }
});
L2.forEach(function (item){
    if(item == "Banana"){
        alert("We found a banana in the second array");
    }
});
*/
function greetingFunc(){
    const d = new Date();
    let h =  d.getHours();
    let greeting = ""
    if(0 < h && h < 5){
        greeting = "Good night";
    } else if(h < 12){
        greeting = "Good morning";
    } else if(h < 18){
        greeting = "Good afternoon";
    } else if(h < 20){
        greeting = "Good evening";
    } else if (h < 24){
        greeting = "Good night";
    }
    console.log(greeting);
    document.getElementById("greeting").innerHTML = greeting + ", I am Vidhya Vishwanath";
}
if(!window.location.href.includes("contact") && !window.location.href.includes("cv") && !window.location.href.includes("fun")){
    greetingFunc();
}

function addYear(){
    const d = new Date();
    let y = d.getFullYear();
    document.getElementById("copyYear").innerHTML = "© " + y + " Vidhya Vishwanath - All Rights Reserved";
}

function showList(){
    document.querySelector("ul").style.display = "block";
    document.getElementById("funButton").style.display = "none";
}

$(document).ready(function(){
    $("#readMore").click(function(){
      $("#intro").toggle(); 
    });
});

function checkValidInput(){
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const comment = document.getElementById("comment");
    if(!name.checkValidity() || !email.checkValidity() || !comment.checkValidity()){
        document.getElementById("errorMessage").style.display = "block";
    } else {
        document.getElementById("errorMessage").style.display = "none"; 
    }
}