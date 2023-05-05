const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // put "0" if the length of String is less than 2. 
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

getClock(); //do not make users to see clocks after one second. 
setInterval(getClock, 1000) //user interval when I want to do sth per n time.

// function sayHello(){ 
//     console.log("hello")
// }
// setTimeout(sayHello, 5000); //execute the code when the setted time is passed. 