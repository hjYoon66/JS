const images = ["img1.jpg", "img2.jpg", "img3.jpg"]

const chosenImgae = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")

bgImage.src = `img/${chosenImgae}`

document.body.appendChild(bgImage)