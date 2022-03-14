window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var lastname = document.forms["myForm"]["lastname"];
    var gender = document.forms["myForm"]["gender"];
    var birthdate = document.forms["myForm"]["bday"];
    var email = document.forms["myForm"]["email"];
    var username = document.forms["myForm"]["username"];
    var password = document.forms["myForm"]["password"];

    var errormsg = document.getElementById("errormsg")
    errormsg.innerText = "";

    var result =true;
    if(lastname.value == ""){
        errormsg.innerText += "reqlastname,"
        result = false;
    }
    if(gender.value == ""){
        errormsg.innerText += "reqgender,"
        result = false;
    }
    if(birthdate.value == ""){
        errormsg.innerText += "reqbirthdate,"
        result = false;
    }
    if(email.value == ""){
        errormsg.innerText += "reqemail,"
        result = false;
    }
    if(username.value == ""){
        errormsg.innerText += "requsername,"
        result = false;
    }
    
    if(password[0].value != password[1].value){      
        errormsg.innerText += "password not Match,"
        result = false;
    }
    
    if(result == false){
        return false;
    }

    

    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}