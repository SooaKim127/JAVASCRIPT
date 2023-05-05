# Javascript on the browser

## 3.0 The document Object
document is an object that exists in the browser

Javascript and HTML are connected, so Javascript can access and edit HTML!

## 3.1 HTML in Javascript
console.log() method shows the given argument
```
console.log("Hello world")
console.log(title)
```

console.dir() method shows the properties of a specified JavaScript object
```
console.log(title)
```

## 3.2 Searching for elements
getElementById() : get and element(return only one element) by id from the object. 
getElementsByClassName() : get elements(return array) by class name from the object.
getElementsByTagName() : get elements(return array) by tag name from the object.

querySelector() : get element(return only one) by specifying the classname, id, tagname. 
querySelector is used commonly in programming!
*queryselectAll returns all the values. 

<!-- 해당 HTML의 고유 00를 추적하여 해당 HTML파일을 찾은뒤에
JS가 해당 00를 가진 HTML 파일을 보완 수정할 수 있도록 해준다. -->

The important thing is we call and change html in js. 


```
html
<h1 class="book" id="title">1987</h1>

js
const title = document.getElementById("title"); 
title.innerText = "1984" 
```

```
html
<h1 class="book" id="title">1987</h1>
<h1 class="book" id="title">Brave New World</h1>

js
const title = document.getElementsByClassName("title"); 
console.log(title)
```

```
html
<h1 class="book" id="title">1987</h1>
<h1 class="book" id="title">Brave New World</h1>

js
const title = document.getElementsByTagName("h1"); 
console.log(title)
```

```
html
<h1 class="book" id="title">1987</h1>
<h2 class="book" id="title">Brave New World</h2>

js
const title = document.querySelector(".book h1"); 
console.log(title)

const title2 = document.querySelector("#title h2"); 
console.log(title2)
```

## 3.3 Events
The important thing to remember! HTML file is loaded into the browser first, and then JavaScript files are loaded  afterwards through HTML.

event : action or occurrence that takes place in the browser

```
html
<h1 class="book" id="title">1987</h1>
<h1 class="book" id="title">Brave New World</h1>

js
const title1 = document.querySelector("h1"); 
title1.style.color = "blue"

function handleTitleClick(){
    console.log("Title1 was clicked")
}
title1.addEventListener("click", handleTitleClick); 
<!-- The point here is that I should not put () like this, handleTitleClick(). This command has to be executed following by the event, not the moment the line runs-->
```

## 3.4 Event part2
How to search for the events that I want to listen
1. Google the name of the element that I am interested in. 
    ex) h1 html element mdn(mozilla developer network)
2. Click a webpage that includes the word "web APIs" (js view of html elements)

OR

Use console.dir(<object>) and see the events which have "on" before the name of the property. But use its name without "on" when you write. 

```
html
<h3 class="content" id="page1">fasdfasdfasdf</h3>

js
const content = document.querySelector(".content h3"); 
function handleMouseEnter(){
title.innerText = "mouse is here!";
}

function handleMouseLeave(){
title.innerText = "mouse is gone!";
}

title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
```

## 3.6 CSS in js
```
<h1 class="hello">hello nice to meet you</h1>
const h1 = document.querySelector(".hello h1");

function handleTextClick{
    const currentColor = h1.style.color;
    let newColor;
    if(h1.style.color == "black"){
        newColor = "blue";
    }else{
        newColor = "black";
    }
    h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);
```
*Although Nico taught us how to change css in js, he said it's better to handle things that can be handled in cs, such as changing colors.
