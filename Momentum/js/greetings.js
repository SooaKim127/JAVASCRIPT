const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // we use uppercase variable which contains only String
const USERNAME_KEY = "username";

//  - Validate whether the form of the user and the server matches
// We use input tag to give data to server. However, we need validatation whether the form of the user and the server matches. There is several ways to test this, but Nico showed me using attribute of input tag of html. See the line 12 in index.html. 
// I'm not familiar with importance of the form, let's study later. https://coding-food-court.tistory.com/18

// Prevent default action; prevent refreshing the webpage when the data is submitted
function onLoginSubmit(event) {
    // By putting the event, the js will give information follwing the recent event!! SUPER IMPORTANT
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username  = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // console.log(event); 
    // console.log(USERNAME_KEY ); 
    paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `Hello ${username}`; // It is function like "Hello " + USERNAME_KEY but more convenient
  greeting.classList.remove(HIDDEN_CLASSNAME); 
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername == null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  // submit occur when user press the enter or click. When we submit the form, the brower is setted to be refresh the page. Therefore, I have to prevent the default behavior; see the line 15. 
}else{
  paintGreetings(savedUsername);
}

// Prevent default action 2; prevent linking to new webpage when the link is clicked
// const link = document.querySelector("a");
// function handleLinkClick(event){
//   event.preventDefault();
//   console.log(event);
// }
// link.addEventListener("click", handleLinkClick);