const url = 'https://pt.wikipedia.org/wiki/House_of_Cards_(s%C3%A9rie_americana)'
const btn = document.querySelector('info')

const video = 'https://www.netflix.com/br-en/title/70178217?source=35'
const btnVer = document.querySelector('ver')

console.log(btn)

function moreinfo(){
    const win = window.open(url, '_blank')
    win.focus()
}

function assistir(){
    const win = window.open(video, '_blank')
    win.focus()
}