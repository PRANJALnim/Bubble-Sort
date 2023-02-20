var size = prompt("Enter size of array: ");
var arr = [];

for (var i = 0; i < size; i++) {
  var element = prompt("Enter element at index " + i);
  Number(element);
  arr.push(Number(element));
}

var container = document.getElementById("con");

for (var i = 0; i < arr.length; i++) {
  var div = document.createElement("div");
  div.className = "element";
  div.innerHTML = arr[i];
  container.appendChild(div);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let button = document.getElementById("but");

button.addEventListener("click", function() {
  button.style.visibility = "hidden";
});

let len = arr.length;

async function bubbleSort(arr) {
    // document.getElementsById("togglee").style.visibility = "hidden";
  for(var i = 0; i < arr.length; i++) {
    const collection = document.getElementsByClassName("element");
    for(var j = 0; j < ( arr.length - i -1 ); j++) {
      collection[j].style.backgroundColor = "#00437a";
      collection[j+1].style.backgroundColor = "#00437a";
      await sleep(1000);
      if(arr[j] > arr[j+1]) {
        collection[j].style.backgroundColor = "red";
        collection[j+1].style.backgroundColor = "red";
        await sleep(500);
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j+1] = temp;
        collection[j].innerHTML = arr[j];
        collection[j+1].innerHTML = arr[j+1];
        const h = document.getElementsByClassName("commands");
        h[0].innerHTML += "<br>" + arr[j+1] + " is greater then " + arr[j] + " so swaping them";
        collection[j].style.backgroundColor = "#00437a";
        collection[j+1].style.backgroundColor = "#00437a";
      }
      
      collection[j].style.backgroundColor = "#2196F3";
      collection[j+1].style.backgroundColor = "#2196F3";
    }
    collection[len-i-1].style.backgroundColor = "#1a2dff";
}
const h = document.getElementsByClassName("commands");
h[0].innerHTML += "<br>" + "Sorted!";
}

let st = "\n";
