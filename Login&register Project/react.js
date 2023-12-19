document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".btn-login");
    const registerLink = document.querySelector(".register-link");
    const loginLink = document.querySelector(".Login-link");
    const log = document.querySelector(".log");
    const closeBtn = document.querySelector(".icon-close");

    // Tampilkan pop-up Login
    loginBtn.addEventListener("click", function() {
        log.style.display = "block";
    });

    // Tampilkan pop-up Register
    registerLink.addEventListener("click", function() {
        log.style.display = "block";
        document.querySelector(".register").style.display = "block";
        document.querySelector(".login").style.display = "none";
    });

    // Tampilkan pop-up Login
    loginLink.addEventListener("click", function() {
        log.style.display = "block";
        document.querySelector(".login").style.display = "block";
        document.querySelector(".register").style.display = "none";
    });

    // Sembunyikan pop-up saat tombol close diklik
    closeBtn.addEventListener("click", function() {
        log.style.display = "none";
    });
});