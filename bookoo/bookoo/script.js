//selecting popup box, popup overlay and circle button

var popup = document.querySelector(".popup-overlay")
var box = document.querySelector(".popup-box")
var circle = document.getElementById("addition")

    circle.addEventListener("click",function()
{
popup.style.display="block"
box.style.display="block"
})
 //close popup 
var close = document.getElementById("closepopup")
close.addEventListener("click", function()
{
 
  popup.style.display="none"
box.style.display="none"
})

// container, book-title-input, book-author-input, short-description input.
 var container = document.querySelector(".container")
 var addbook = document.getElementById("addbook")
 var booktitle = document.getElementById("book-title-input")
 var bookauthor = document.getElementById("book-author-input")
 var descriptionbox = document.getElementById("short-description-input")

 addbook.addEventListener("click", function(event){
event.preventDefault()
  var div = document.createElement("div")
  div.setAttribute("class", "box")
  div.innerHTML=`<h2>${booktitle.value}</h2>
  <h5>${bookauthor.value}</h5>
  <p>${descriptionbox.value}</p>
  <button onclick="deletebutton(event)">DELETE</button>`

  container.append(div)
    popup.style.display="none"
box.style.display="none"
}
)
 

  function deletebutton(event){
event.target.parentElement.remove()
  }
 