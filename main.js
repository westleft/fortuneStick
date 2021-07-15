let startBtn = document.querySelector('.startBtn')
const startSection = document.querySelector('.startSection')
const mainContainer = document.querySelector('.mainContainer')

startBtn.addEventListener('click', function () {
    startSection.classList.add('none')
    mainContainer.classList.add('none')

    startSection.addEventListener('transitionend', function () {
        startSection.style.display = 'none'
        mainContainer.style.display = 'none'
    }) 
})

const btn = document.querySelectorAll('.selectBox button')

btn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        setAttribute(item)

        //要先點'求籤類別'才能點'開始抽籤'
        if(item.getAttribute('data-sec') == 'selected'){
            startBtn.disabled = false
        }
    })
    
})

//設定按鈕屬性
function setAttribute(item) {
    for (let i = 0; i < btn.length; i++) {
        btn[i].classList.remove('selectedBtn')
        btn[i].setAttribute('data-sec', 'unselected')
    }
    item.setAttribute('data-sec', 'selected')
    item.classList.add('selectedBtn')
}