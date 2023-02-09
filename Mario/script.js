const mario = document.querySelector('.mario')

const jump_animation = () => {
    mario.classList.add ('jump_animation')

    setTimeout(() => {
        mario.classList.remove('jump_animation')
    },700)
}

document.addEventListener('keydown', jump_animation)