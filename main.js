data = [
    {
        name: '大吉',
        number: '一',
        poem: `巍巍獨步向雲間<br>玉殿千官第一班<br>富貴榮華天付汝<br>福如東海壽如山`,
        stick: '甲甲',
        content: '功名遂。福祿全。訟得理。病即痊。桑麻熟。婚姻聯。孕生子。行人還。',
        content2: '此籤謀望通達。無不遂意。但各有所主。官員占茲。有超越之喜。士人有功名之望。庶人不吉。若謀望。求財者。有名無實。為語多空虛也。'
    },{
        name: '中吉',
        number: '六十八',
        poem: `南販珍珠北販鹽<br>年來幾倍貨財添<br>勸君止此求田舍<br>心欲多時何日厭`,
        stick: '庚辛',
        content: '訟已勝。莫再戰。名已成。毋再問。 婚可定。病自散。行人歸。且安分。',
        content2: '此籤大吉。謀望有成。諸般遂意。家道亨通。訟必勝。莫再興。名利有。婚自成。行人回。病莫憂。財利一倍。任意求。風水利。孕生女。凡謀事。要謹慎。且安分守己也。'
    },{
        name: '大吉',
        number: '一',
        poem: `巍巍獨步向雲間<br>玉殿千官第一班<br>富貴榮華天付汝<br>福如東海壽如山`,
        stick: '甲甲',
        content: '功名遂。福祿全。訟得理。病即痊。桑麻熟。婚姻聯。孕生子。行人還。',
        content2: '此籤謀望通達。無不遂意。但各有所主。官員占茲。有超越之喜。士人有功名之望。庶人不吉。若謀望。求財者。有名無實。為語多空虛也。'
    }
]

let startBtn = document.querySelector('.startBtn')
let startSection = document.querySelector('.startSection')
let mainContainer = document.querySelector('.mainContainer')

let info = document.querySelector('.info')
let stickSection = document.querySelector('.stickSection')
let resultSection = document.querySelector('.resultSection')
let againBtn = document.querySelector('.againBtn')


startBtn.addEventListener('click', function () {
    startSection.classList.add('none')
    mainContainer.classList.add('none')

    startSection.addEventListener('transitionend', function () {
        startSection.classList.add('displayNone')
        mainContainer.classList.add('displayNone')
        resultSection.classList.remove('displayNone')
    })
    

    setTimeout(function () {
        resultSection.classList.remove('none')
        resultSection.addEventListener('transitionend', function () {
            info.classList.remove('none')
        })
    }, 1000)

    //吉出現
    setTimeout(function () {
        info.classList.add('none')
        resultSection.addEventListener('transitionend', function () {
            info.classList.add('none')
        })
    }, 3500)


    setTimeout(function () {
        info.style.display = 'none'
        info.classList.add('displayNone')
        stickSection.classList.remove('displayNone')
    }, 4000)

    setTimeout(function () {
        stickSection.classList.remove('none')
    }, 4100)
})


againBtn.addEventListener('click', function () {

    resultSection.classList.add('none')   
    startSection.classList.remove('none')
    mainContainer.classList.remove('none')
    stickSection.classList.add('none') 

    info.style.display = 'flex'

    startSection.classList.remove('displayNone')
    mainContainer.classList.remove('displayNone')
    stickSection.classList.add('displayNone')
    resultSection.classList.add('displayNone')
})



const btn = document.querySelectorAll('.selectBox button')

btn.forEach(function (item, index) {
    item.addEventListener('click', function () {
        setAttribute(item)

        //要先點'求籤類別'才能點'開始抽籤'
        if (item.getAttribute('data-sec') == 'selected') {
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