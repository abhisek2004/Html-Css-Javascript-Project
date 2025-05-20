    function login(e) {
        e.preventDefault();
        console.log("hi")
        let myForm = document.getElementById("form");
        console.log(myForm)

        let email = myForm.email.value;

        let password = myForm.password.value;
        console.log(email, password)
        let all_users = JSON.parse(localStorage.getItem("users"))

        let result = false;
        all_users.forEach(element => {

            if (element.email === email && element.password == password) {

                result = true
                window.location.href = "../index.html"


            }


        });

        if (!result) {
            alert("invalid credentials")
        }

    }
