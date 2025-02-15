document.addEventListener("DOMContentLoaded", function () {
    const emailButton = document.getElementById("showEmail");
    const emailBox = document.getElementById("emailBox");

    emailButton.addEventListener("click", function () {
        if (emailBox.style.display === "none" || emailBox.style.display === "") {
            emailBox.style.display = "block";
        } else {
            emailBox.style.display = "none";
        }
    });
});
