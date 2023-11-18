var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementsByClassName("delete");
var lis = document.getElementsByTagName("li");

liElements();
buttonDelete()
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button =document.createElement("button")
	li.appendChild(document.createTextNode(input.value));
	button.appendChild(document.createTextNode("delete"));
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";

	liElements();
	buttonDelete();

}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function liElements(){
	for(let i=0; i<lis.length;i++){
		lis[i].addEventListener("click", addClass);
	}
}

function addClass(){
	this.classList.toggle("done");
}
function buttonDelete(){
	var btn = document.querySelectorAll("li button");
	for(let i =0; i<btn.length;i++){
		btn[i].addEventListener("click", function(e){
				e.target.parentElement.remove();			
		})
	}
}



button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


