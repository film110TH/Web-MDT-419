window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){

	const queryString = window.location.search;

	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get("username");
	const password = urlParams.get("password");

	var Cusername = document.forms["myLogin"]["username"];
	var Cpassword = document.forms["myLogin"]["password"];

	if(username != Cusername.value){
		alert("WrongUsername");
		return false;
	}
	else if(password != Cpassword.value){
		alert("WrongPassword");
		return false;
	}
	else{alert("pass")}

	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			