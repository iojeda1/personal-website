document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("showEmail").addEventListener("click", function () {
        if (document.getElementById("emailBox").style.display === "none" || document.getElementById("emailBox").style.display === "") {
            document.getElementById("emailBox").style.display = "block";
        } else {
            document.getElementById("emailBox").style.display = "none";
        }
    });
});