function newElement() {
  var listItem = document.createElement("li");
  var inputVal = document.getElementById("myInput").value;
  var target = document.createTextNode(inputVal);
  listItem.appendChild(target);
  if (inputVal === '') {
    alert("Enter Something before 'add' ");
    inputVal+="-----------------";
  } else {
    document.getElementById("myUL").appendChild(listItem);
  }
  document.getElementById("myInput").value = "";

  var btn = document.createElement("BUTTON");
  var txt = document.createTextNode("\u002D");
  btn.className = "close";
  btn.appendChild(txt);
  listItem.appendChild(btn);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

var close=document.getElementsByClassName('close');
for(let i=0; i<close.length; i++){
	close[i].onclick=function(){
      var div = this.parentElement;
      div.style.display = "none";	
	}
}

