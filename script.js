// Never Win 99
var sum = document.getElementById('sum')
var you = document.getElementById("your-num")
var bot = document.getElementById("bot-num")
var yourTurn = true
var botTurn = false

function clicked(n) {
    if(yourTurn===true){
        let sumNum = Number(sum.innerHTML)
        let yourNum = n
        if(sumNum+yourNum<99){
            you.innerHTML = yourNum
            sum.innerHTML = sumNum + yourNum
            yourTurn = false
            botTurn = true
            botLogic(yourNum);
        }
        if(sumNum==99){
            result(yourTurn,botTurn)
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function botLogic(yourNum) {
    await sleep(1000);
    bot.innerHTML = 11-yourNum
    sum.innerHTML =Number(sum.innerHTML) + 11-yourNum
    yourTurn = true
    botTurn = false
    if(Number(sum.innerHTML)==99){
        result(yourTurn,botTurn)
    }
}

function result(yourTurn,botTurn) {
    message = document.querySelector(".msg")
    if (yourTurn === true) {
        message.innerHTML = "You lost!"
        message.style.color = 'red'
    }else if (botTurn === true) {
        message.innerHTML =  "You Won!"
        message.style.color = 'red'
    }
}