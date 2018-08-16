const getJsonDataUrl = 'jsonData';
const downloadUrl = 'download';

// 原生JS 调用Ajax
document.addEventListener('readystatechange', function(){
	if (document.readyState == 'complete'){
		document.getElementById('jsonButton').addEventListener('click', function() {
			// Ajax 请求
			let xmlHttp = new XMLHttpRequest();
			xmlHttp.onreadystatechange = function() {
				if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
					// 解析返回值
					JSON.parse(xmlHttp.responseText);
				}
			}
			xmlHttp.open("POST", getJsonDataUrl, true);
			xmlHttp.send();
		});
	}	
});

// jQuery 调用 Ajax
$(document).ready(function() {
	$('#downlodButton').click(function() {
		window.open(downloadUrl);
	});
});