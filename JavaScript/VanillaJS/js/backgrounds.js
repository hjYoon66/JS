const images = ["0.jpg", "1.jpg", "2.jpg"]

const body = document.querySelector("body");

function paintImage(chosenImage) {
    const image = new Image();
    image.src = `img/${chosenImage}`; // 가져올 image경로 지정
    console.log(image.src)
    image.classList.add("bgImage"); // image에 bgImage 클래스 추가
    body.appendChild(image); // body의 자식에 image추가
}

function genRandom() {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    return chosenImage;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();
