const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container2');
const popup = document.querySelector("#inscriv");

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
popup.addEventListener('click', function () {
    document.querySelector('#popup').style.display = "block";
});
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('#popup').style.display = "none";
})