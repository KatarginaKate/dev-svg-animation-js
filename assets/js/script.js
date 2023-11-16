const animationPath = document.querySelectorAll('.animation-path');
const buttons = document.querySelectorAll('.btn');

function removeActiveClass() {
    buttons.forEach(item => {
        item.classList.remove('active')
    })
} 



buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        removeActiveClass();
        btn.classList.add('active')
    })
})

animationPath.forEach(path => {
    console.log(path);
})