let fact = document.querySelector("#fact");
let factText = document.querySelector("#factText");

let number_ip = document.querySelector("#number_ip");
number_ip.addEventListener("input",getFactFetch);

// using AJAX
// function getFactAjax(){
//     let number = number_ip.value;
//     // console.log(number);
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET','http://numbersapi.com/'+number);
//     xhr.onload = function(){
//         if(this.status == 200 && number != ''){
//             // console.log(this.responseText);
//             fact.style.display = "block";
//             factText.innerHTML = this.responseText;
//         }        
//     }
//     xhr.onerror = function(){
//         fact.style.display = "block";
//         factText.innerText = "No! Internet Connection...";
//     }
//     xhr.send();
// }

// using fetch()
function getFactFetch(){
    let number = number_ip.value;
    fetch('http://numbersapi.com/'+number)
    .then(response => response.text())
    .then(data => {
        // console.log(data);
        if(number != ''){
            fact.style.display = "block";
            factText.innerText = data;
        }
    })
    .catch(err => {
        // console.log(err);
        fact.style.display = "block";
        factText.innerText = "NO! INTERNET CONNECTION";
    });
}