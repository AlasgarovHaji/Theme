let buttonsun = document.querySelector ('.icon_theme1')
let buttondark = document.querySelector ('.icon_theme2')

let lightmode = document.querySelector('.text_theme1')
let darkmode = document.querySelector('.text_theme2')

buttonsun.addEventListener('click', ()=> {
    darkmode.classList.remove('none');
    lightmode.classList.add('none')
})

buttondark.addEventListener('click' , ()=> {
    lightmode.classList.remove('none');
    darkmode.classList.add('none')
})