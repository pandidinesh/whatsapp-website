function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let error = document.getElementById("error");

    if (email === "" || password === "") {
        error.innerHTML = "Please fill in all fields";
    } 
    else {
        error.style.color = "green";
        error.innerHTML = "Login successful";

        // Redirect after successful login
        // window.location.href = "dashboard.html";
    }
}
