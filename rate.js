function init() {
    bodyEvents();
}

var selectedBtn = "nothing"; 
var prevBtn = "";
let btnList=[];

// Define events for clicking Rate & Submit buttons 
function bodyEvents(){
    btnList = document.querySelectorAll(".btn-rate button");
        btnList.forEach(item => {
        item.addEventListener("click",btnClicked);
    });
    
    btnSubmit = document.querySelector(".btn-submit");
    btnSubmit.addEventListener("click",clkSubmit);  
}

// Handle click on rating button
function btnClicked(e){
    // in case another selection performed 
    // revert previous selection button to original colors 
    if (selectedBtn != "nothing"){
        prevBtn = document.querySelector(`#btn${selectedBtn}`);
        prevBtn.style = "none";
    }

    // change button's background (to Orange) and font color (to white)
    e.target.style.backgroundColor = "hsl(216, 12%, 54%)";
    e.target.style.color = "white"; 
    
    // save the selected rate to be used in the thank you message
    selectedBtn = e.target.value;
}

// Handle click on Submit button
function clkSubmit(){
    // inject selected rate value into the thank you message  
    sel = document.querySelector("#id-rate");
    sel.innerHTML = ` ${selectedBtn}`;

    // Display thank you container/message (change "display: none" property) 
    sub = document.querySelector(".container-thank");
    sub.style.display = "block";
}

init();
