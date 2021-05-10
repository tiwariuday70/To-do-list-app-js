let inputItem = document.querySelector('#input');
inputItem.onkeyup = function(e){


if(e.keyCode === 13){
let ul = document.querySelector('#list');
let li = document.createElement('li');
let TextNode = document.createTextNode(inputItem.value);
li.appendChild(TextNode);
ul.appendChild(li);
inputItem.value = '';




li.onclick = function(e){

	e.target.remove();
}


}

};