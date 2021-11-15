function creategridEle() {
    let list = document.createElement("div");
    document.getElementById("gridCont").innerHTML = "";

    for (let i of arr) {
        let item = document.createElement("div");
        item.innerHTML = i;
        item.className = "grid-item grid-item_" + i;
        document.getElementById("gridCont").appendChild(item);
    }
}

function shuffle() {
    for (let i = 1; i < arr.length; i++) {
        let j = Math.floor(Math.random() * i); // random index from 0 to i
        [arr[i], arr[j]] = [arr[j], arr[i]];
        console.log(arr);
    }
    creategridEle();
}

function reset() {
    arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    creategridEle();
}
