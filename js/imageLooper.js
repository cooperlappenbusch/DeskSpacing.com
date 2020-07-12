var list = [
    "images/example desk 1.png",
    "images/example desk 2.png",
    "images/example desk 3.png",
    "images/example desk 4.png",
    "images/example desk 5.png",
];


var index = 0;

function changeLights() {
    console.log("CHANGING");
    index = index + 1;
    var currentIndicator = document.getElementById('imageCarousel' + index);
    currentIndicator.classList.remove("active");

    if (index == list.length) index = 0;
    document.getElementById('imageCarousel' + (index + 1)).className = "active";
    var image = document.getElementById('jumbotronImage');
    image.src = list[index];
}
setInterval(function () { changeLights() }, 4000);