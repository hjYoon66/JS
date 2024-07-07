let count = 0;
const number = document.querySelector('.num')
const btns = document.querySelectorAll('.btn')

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        number.textContent = count;
    })
})