function validateFrom(){
    let firstName = document.getElementById("firstName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(firstName === "" ){
        alert("first Name must be filled out");
        return false;
    }

    if(email === ""){
        alert("Email must be filled out");
        return false;
    }

    if(phone === ""){
        alert("phone must be filled out");
        return false;
    }
}