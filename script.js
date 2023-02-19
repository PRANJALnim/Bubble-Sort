
// function bblSort(arr){
    
//     for(var i = 0; i < arr.length; i++){
//       for(var j = 0; j < ( arr.length - i -1 ); j++){
//         const collection = document.getElementsByClassName("element");
//         collection[i].style.backgroundColor = "red";
//         collection[j].style.backgroundColor = "red";
//         if(arr[j] > arr[j+1]){
//             sleep(1000);
//             var temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j+1] = temp;
//             collection[i].innerHTML = arr[i];
//             collection[j].innerHTML = arr[j];
//             sleep(1000);
//             collection[i].style.backgroundColor = "white";
//             collection[j].style.backgroundColor = "white";
//         }
//       }
//     }
//    }
    
// var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
// bubbleSort(arr);
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(arr){
    const collection = document.getElementsByClassName("element");
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < ( arr.length - i -1 ); j++){
            collection[j].style.backgroundColor = "#00437a";
            collection[j+1].style.backgroundColor = "#00437a";
            await sleep(1000);
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j+1] = temp;
                const h = document.getElementsByClassName("commands");
                h[0].innerHTML += "<br>" + st + arr[j] + " is greater then " + arr[j+1] + " so swap " + arr[j] + " with " + arr[j+1];
                console.log(arr[j] + " is greater then " + arr[j+1] + " so swap " + arr[j] + " with " + arr[j+1]);
                collection[j].innerHTML = arr[j];
                collection[j+1].innerHTML = arr[j+1];
            }
            collection[j].style.backgroundColor = "#2196F3";
            collection[j+1].style.backgroundColor = "#2196F3";
        }

    }
}
let st = "\n";
var arr = [235, 45, 23, 356, 3, 5346, 35, 5];