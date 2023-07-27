let imagesOnPage = document.querySelectorAll('.modal-image')
let modalOverlay = document.querySelector('.modal-overlay')
let imageOpened = document.querySelector('.modal-image-opened')
let closeElement = document.querySelector('.close')

for(let i=0; i<imagesOnPage.length; i++){
    imagesOnPage[i].addEventListener('click', (event)=>{
        imageOpened.setAttribute('src', event.target.getAttribute('src'))
        modalOverlay.style.zIndex = '1'
        modalOverlay.style.opacity = '1'
        imageOpened.style.animation = 'modal-image-zoom 1s'
    })
    
}

closeElement.addEventListener('click', ()=>{
    modalOverlay.style.opacity = '0'
    imageOpened.style.animation = 'modal-image-reverse-zoom 1s'
    setTimeout(()=>{
        modalOverlay.style.zIndex = '-1'
        imageOpened.setAttribute('src', '')
    }, 1000)
})