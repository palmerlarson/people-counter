// Global Variables
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let endShiftEl = document.getElementById("endShift-el");
let count = 0;
let peopleCount = [];

// increment button
function increment() {
    count += 1;
    countEl.textContent = count;
}

// save button
function save() {
    peopleCount.push(count);
    saveEl.innerHTML = '<span class="font">Entries: </span>';
    
    for(var i = 0; i < peopleCount.length; i++)
        {
            saveEl.innerHTML += '<span class="font"> - ' + peopleCount[i] + '</span>';
        }

    countEl.textContent = 0;
    count = 0;
}

// end shift button
function endShift() {
   let endCount = 0;
    for(var i = 0; i < peopleCount.length; i++)
        {
            endCount = endCount + peopleCount[i];
        }
    
    countEl.textContent = "Have a nice day!";
    endShiftEl.innerHTML = '<p class="endShiftStr">Your end of shift total is ' + endCount + '.</p>';
    document.getElementById("increment-btn").disabled = true;
    document.getElementById("save-btn").disabled = true;
}

// new shift button
function newShift() {
    document.getElementById("increment-btn").disabled = false;
    document.getElementById("save-btn").disabled = false;
    endShiftEl.textContent = "";
    countEl.textContent = "";
    saveEl.textContent = "";
    peopleCount = [];
    count = 0;
    countEl.textContent = count;
}

