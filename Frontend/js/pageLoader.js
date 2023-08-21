document.body.onload = function () {
    setTimeout(function () {
        var preloader = document.getElementById('loader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 900)
}

var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '../Resources/data.json'
})