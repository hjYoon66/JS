const colors = ["green", "red", "rgba(133,122,200)"]
const colorText = document.querySelector('.color')
const btn = document.querySelector('.button')


const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * colors.length)
    document.body.style.backgroundColor = colors[randomNumber];
    colorText.textContent = colors[randomNumber]
    console.log(colorText)
}

btn.addEventListener("click", handleClick)