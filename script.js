const player = document.querySelector('audio')

const container = document.querySelector('.player')
container.addEventListener('click', (e)=>{
    const {target} = e
    if('play'=== target.dataset.action){
        player.play()
        target.dataset.action ='pause'
    }
    else{
        player.pause()
        target.dataset.action = 'play'
    }
})
