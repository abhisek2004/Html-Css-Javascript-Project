    let total = JSON.parse(localStorage.getItem("total_details"))
    let apped = document.getElementById("total_append")

    apped.innerHTML = total

    let coupan = document.getElementById("coupan")
    console.log(coupan)

    let apply = document.querySelector(".btn")
    apply.addEventListener("click", validate)


    function validate() {
        let coupan = document.getElementById("coupan")
        console.log(coupan.value)
        if (coupan.value === "masai30") {
            alert("COUPAN SUCCESSFULLY APPLIED CHECK THE UPDATED TOTAL")
            apped.innerHTML = Number(total - total * .30)
        } else {
            alert("Invalid Coupan")
        }




    }

    function proceed(e) {
        e.preventDefault()
        console.log("hi")
        window.location.href = "../proceed/proceed.html"
    }