popup.addEventListener('click', function () {
    document.querySelector('#popup').style.display = "block";
    document.body.style.overflow = "hidden";
});
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('#popup').style.display = "none";
    document.body.style.overflow = "auto";
});