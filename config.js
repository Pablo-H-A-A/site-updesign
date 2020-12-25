document.getElementById('btn-insta').addEventListener('mouseover', btninsta)
document.getElementById('btn-insta').addEventListener('mouseout', saiu)

function btninsta() {
    var btninsta = window.document.getElementById('btn-insta')
    btninsta.style.boxShadow = '0px 0px 25px #300643'
    btninsta.style.transition = '.4s'
}



document.getElementById('btn-whats').addEventListener('mouseover', btnwhats) // açao de qnd o mouser entrar na div
document.getElementById('btn-whats').addEventListener('click', whatspablo)
document.getElementById('btn-whats').addEventListener('mouseout', saiu)// açao de qnd o mouser sair da div

function btnwhats(){
    var btn01 = window.document.getElementById('btn-whats')
    btn01.style.boxShadow = '0px 0px 25px #300643'
    btn01.style.transition = '.4s'

}



document.getElementById('btn-whats2').addEventListener('mouseover', btnwhats2)
document.getElementById("btn-whats2").addEventListener('click', whatsvitor)
document.getElementById('btn-whats2').addEventListener('mouseout', saiu)


function btnwhats2(){
    var btn02 = window.document.getElementById('btn-whats2')
    btn02.style.boxShadow = '0px 0px 25px #300643'
    btn02.style.transition = '.4s'
}


function whatspablo(){
    window.open("https://api.whatsapp.com/send?phone=5534999547225")
    

}
function whatsvitor(){
    window.open("https://api.whatsapp.com/send?phone=5534996431292")
}
function saiu(){
    var btn01 = window.document.getElementById('btn-whats')
    var btn02 = window.document.getElementById('btn-whats2')
    var btninsta = window.document.getElementById('btn-insta')
    btn01.style.boxShadow = '0px 0px 0px'
    btn02.style.boxShadow = '0px 0px 0px'
    btninsta.style.boxShadow = '0px 0px 0px'

}
