
const urlap = document.getElementById("urlap");

const bejelentkezesLink = document.getElementById("bejelentkezesLink");
const regisztracioLink = document.getElementById("regisztracioLink");

const regisztracioSzoveg = document.getElementById("regisztracio-szoveg");
const bejelentkezesSzoveg = document.getElementById("bejelentkezes-szoveg");

bejelentkezesLink.addEventListener("click", function (event) {
    event.preventDefault();

    urlap.classList.add("login-mode");

    regisztracioSzoveg.style.display = "none";
    bejelentkezesSzoveg.style.display = "block";
});

regisztracioLink.addEventListener("click", function (event) {
    event.preventDefault();

    urlap.classList.remove("login-mode");

    bejelentkezesSzoveg.style.display = "none";
    regisztracioSzoveg.style.display = "block";
});
