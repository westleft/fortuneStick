let startBtn = document.querySelector('.startBtn')
let startSection = document.querySelector('.startSection')
let mainContainer = document.querySelector('.mainContainer')

let info = document.querySelector('.info')
let stickSection = document.querySelector('.stickSection')
let resultSection = document.querySelector('.resultSection')
let againBtn = document.querySelector('.againBtn')

let data

window.onload = function () {
    let url = "data.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
    let request = new XMLHttpRequest();
    request.open("get", url);/*设置请求方法与路径*/
    request.send(null);/*不发送数据到服务器*/
    request.onload = function () {/*XHR对象获取到返回信息后执行*/
        if (request.status == 200) {/*返回状态为200，即为数据获取成功*/
            let json = JSON.parse(request.responseText);
            for (let i = 0; i < json.length; i++) {
                // console.log(json[i].name);
            }
            data = json
        }
    }
}

startBtn.addEventListener('click', function () {
    renderText()
    animation()
})


function again() {
    resultSection.classList.add('none')
    startSection.classList.remove('none')
    mainContainer.classList.remove('none')
    stickSection.classList.add('none')

    info.style.display = 'flex'

    startSection.classList.remove('displayNone')
    mainContainer.classList.remove('displayNone')
    stickSection.classList.add('displayNone')
    resultSection.classList.add('displayNone')
}

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

function animation() {
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
}

function getRandom(x) {
    return Math.floor(Math.random() * x);
}

function renderText() {
    let num = getRandom(4)

    info.innerHTML = `<p>第${data[num].number}籤</p>
                      <h2>${data[num].name}</h2>
                      <p>【${data[num].stick}】</p>`

    stickSection.innerHTML =
        `<div class="poem">
            <span>第${data[num].number} 籤 ︻ ${data[num].stick} ︼ ${data[num].name}</span>
            <p>${data[num].poem}</p>
            <img src="${data[num].img}">
        </div>
        <div class="resultText">
            
            <h2>聖意</h2>
            <p>${data[num].content}</p>
            <h2>解曰</h2>
            <p>${data[num].content2}</p>
            <button class="againBtn" onclick="again()">重新求籤</button>
        </div>`

    //判斷有沒有圖片
    let img = document.querySelector('.poem img')

    if (data[num].img) {
        img.style.display = 'flex'
    } else {
        img.style.display = 'none'
    }

}

window.onload = function () {
    setInterval("toggleSound()", 1500);
}

function toggleSound() {
    let music = document.getElementById("vd")  

    if (music.paused) { 
        music.paused = false;
        music.play() 
    }
}
