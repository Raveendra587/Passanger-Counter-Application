let count = 0;
let countElement = document.getElementById("counter");
function increment() {
    count+=1;
    countElement.innerText=count;
}

function save(){
    let savePreviousEntries = document.getElementById("save-previous-entries");
    savePreviousEntries.innerText+=" - "+count;
    countElement.innerText = 0;
    count=0;
}
