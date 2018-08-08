document.addEventListener('readystatechange', function(){
	if(document.readyState == 'complete'){
		document.getElementById('button').addEventListener('click', function() {
			// Ajax 请求
			let xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					xmlHttp.responseText;
				}
			}
			xmlHttp.open("GET", "name", true);
			xmlHttp.send();
		});



	}	
});


window.onload = function(){
	console.log('onload');
}