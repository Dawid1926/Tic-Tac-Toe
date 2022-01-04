let flag = 0;

const divs = [...document.querySelectorAll('div')]
const body = document.querySelector('body')
const button = document.querySelector('button').addEventListener('click', () => {location.reload()})


divs.forEach(div => div.addEventListener("click", function(){
    if (!this.style.backgroundImage) {
        this.classList.add("flip-horizontal-top")
        this.style.backgroundImage = flag? X.changeBackgroundForX() : O.changeBackgroundForO()

    }
    checkTicTacToe(O)
    checkTicTacToe(X)
}))


const X = {
    type: 'X',
    img: 'url("close.png")',
    changeBackgroundForX: function() {
        flag--
        return X.img
    }
}

const O = {
    type: 'O',
    img: 'url("circle-ring.png")' ,
    changeBackgroundForO: function() {
        flag++
        return O.img
        
    }
}

function checkTicTacToe(el) {
for ( let i = 0; i < 3; i += 3) {
        if (divs[i].style.backgroundImage == `${el.img}` && divs[i + 4].style.backgroundImage == `${el.img}` && divs[i + 8].style.backgroundImage == `${el.img}`){
            divs[i].style.backgroundColor = "yellow";
            divs[i + 4].style.backgroundColor = "yellow";
            divs[i + 8].style.backgroundColor = "yellow";
            const win = document.createElement('h1');
            body.appendChild(win);
            win.textContent = `${el.type} Wins`

            return 

        }
    }

    for ( let i = 2; i < 3; i++ ) {
        if (divs[i].style.backgroundImage == `${el.img}` && divs[i + 2].style.backgroundImage == `${el.img}` && divs[i + 4].style.backgroundImage == `${el.img}`){
            divs[i].style.backgroundColor = "yellow";
            divs[i + 2].style.backgroundColor = "yellow";
            divs[i + 4].style.backgroundColor = "yellow";
            const win = document.createElement('h1');
            body.appendChild(win);
            win.textContent = `${el.type} Wins`
            return
        }
    }

    for ( let i = 0; i < 9; i+=3) {
        if (divs[i].style.backgroundImage == `${el.img}` && divs[i + 1].style.backgroundImage == `${el.img}` && divs[i + 2].style.backgroundImage == `${el.img}`){
            divs[i].style.backgroundColor = "yellow";
            divs[i + 1].style.backgroundColor = "yellow";
            divs[i + 2].style.backgroundColor = "yellow";
            const win = document.createElement('h1');
            body.appendChild(win);
            win.textContent = `${el.type} Wins`
            return
        }
    }

    for ( let i = 0; i < 3; i++) {
        if (divs[i].style.backgroundImage == `${el.img}` && divs[i + 3].style.backgroundImage == `${el.img}` && divs[i + 6].style.backgroundImage == `${el.img}`){
            divs[i].style.backgroundColor = "yellow";
            divs[i + 3].style.backgroundColor = "yellow";
            divs[i + 6].style.backgroundColor = "yellow";
            const win = document.createElement('h1');
            body.appendChild(win);
            win.textContent = `${el.type} Wins`
            return
        }
    }


}
