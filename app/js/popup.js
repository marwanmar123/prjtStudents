popup.addEventListener('click', function () {
    document.querySelector('#popup').style.display = "block";
    window.addEventListener('scroll', noscroll);

    function noscroll() {
        window.scrollTo(0, 0);
    }
});
document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#popup').style.display = "none";
});