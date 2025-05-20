 function signup(e) {
     e.preventDefault();

     let myForm = document.getElementById("form");

     let name = myForm.name.value;
     let email = myForm.email.value;
     let mobile = myForm.mobile.value;
     let password = myForm.password.value;

     console.log("hi", email, name)

     var user = {
         name,
         email,
         mobile,
         password
     }



     function checkForProperData() {

         for (k in user) {
             if (user[k] === "") {
                 alert("please fill all the details")
                 return false;
             }
         }
         return true;
     }




     if (checkForProperData()) {



         if (localStorage.getItem("users") === null) {
             localStorage.setItem("users", JSON.stringify([]))
         }

         let users = JSON.parse(localStorage.getItem("users"));

         users.push(user)




         localStorage.setItem("users", JSON.stringify(users))



     }












 }