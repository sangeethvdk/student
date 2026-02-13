function signup() {
    var roll = document.getElementById("roll").value;
    var password = document.getElementById("password").value;

    if (roll !== "" && password !== "") {
        document.getElementById("message").innerHTML =
            "You are the student of Srinidhi Institute of Science and Technology.";

        document.getElementById("courses").style.display = "block";
    } else {
        document.getElementById("message").innerHTML =
            "Please enter Roll Number and Password.";
    }
}
