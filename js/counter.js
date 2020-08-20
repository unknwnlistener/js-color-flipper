let count = 0;

const value = document.querySelector('#count');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const styles = event.currentTarget.classList;
        if(styles.contains('btn-decrease')) {
            count--;
        } else if(styles.contains('btn-increase')) {
            count++;
        } else if(styles.contains('btn-reset')) {
            count = 0;
        }

        if(count > 0) {
            value.style.color = "green";
        } else if(count < 0) {
            value.style.color = "red";
        } else {
            value.style.color = "black";
        }
        value.textContent = count;
    });
});