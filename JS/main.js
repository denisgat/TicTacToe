// Initializing variables


//create initial div variable so that elements created later are above JS in HTML
var init = document.getElementById('init')

//create Text Variables                
var xtext = document.createTextNode("X");
var otext = document.createTextNode("O");

//game global variables 
let tilenumber = 0;
let gamerow = "";
let state = 0;
let win = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["7", "5", "3"],
    ["9", "5", "1"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"]
]
let xarr = [];
let oarr = [];
let winning = false

document.body.className = "container bg-dark text-white mt-0"

//functions

function build(elementtype, classname, id, style, htmlcontent) {
    element = document.createElement(elementtype)
    element.className = classname
    element.id = id
    element.style = style
    element.innerHTML = htmlcontent
    return element
}

function create() {
    main = build('main', 'container mx-auto', '', '', '')
    init.appendChild(main)

    //game


    gamecontainer = build('div', 'container mx-auto p-0', '', '', '')

    for (let i = 1; i <= 3; i++) {
        gamerow = build('div', 'row border-top border-bottom mx-auto', 'row' + i, 'min-height: 15vh; height: 15vh; max-width: 30rem', '');
        for (let j = 1; j <= 3; j++) {
            tilenumber = tilenumber + 1
            gamecol = build('div', 'col-4 border-left border-right text-center display-4 pt-4', tilenumber, '', '')
            gamecol.onclick = run;
            gamerow.appendChild(gamecol)
        }
        gamecontainer.appendChild(gamerow)
    }
    main.appendChild(gamecontainer)
    init.appendChild(main)



//FOOTER 

    var footer = build('footer', 'my-5', '', '', '', '')
    var footercontainer = build('div', 'container', '', '', '');
    var footerrow = build('div', 'row', '', '', '')
    var footercol = build('div', 'col-6 mx-auto', '', '', '')
    var resetbtn = build('button', 'btn btn-lg btn-primary btn-block', 'btn1', '', 'RESET GAME')

    footercol.appendChild(resetbtn)
    footerrow.appendChild(footercol)
    footercontainer.appendChild(footerrow)
    footer.appendChild(footercontainer)
    init.appendChild(footer)

    resetbtn.onclick = function clear() {
        main.innerHTML = '';
        footer.innerHTML = '';
        tilenumber = 0;
        gamerow = "";
        state = 0;
        xarr = [];
        oarr = [];
        winning = false
        ptext.innerHTML = "PLAYER: X STARTS \n GAME ON"
        create();
    }
}

function run() {
    if (this.innerHTML == "" && winning == false){
        if (state % 2 == 0) {
            this.innerHTML = "X"
            xarr.push(this.id)
            ptext.innerHTML = "PLAYER: O's TURN"
            for (i = 0; i < win.length; i++) {
                if (xarr.includes(win[i][0]) &&
                    xarr.includes(win[i][1]) &&
                    xarr.includes(win[i][2])) {

                    ptext.innerHTML = "PLAYER X WINS!!!"
                    ptext.className = "display-5 text-center"
                    winning = true
                }
            }
        
        }
        else {
            this.innerHTML = "O"
            oarr.push(this.id)
            ptext.innerHTML = "PLAYER: X's TURN"

            for (i = 0; i < win.length; i++) {
                if (oarr.includes(win[i][0]) &&
                    oarr.includes(win[i][1]) &&
                    oarr.includes(win[i][2])) {

                    ptext.innerHTML = "PLAYER O WINS!!!"
                    ptext.className = "display-5 text-center"
                    winning = true
                }
            }
        }
        state++;
    }
    console.log(state)
    console.log(winning)
    if(state == 9 && winning == false ){
        ptext.innerHTML = "ITS A TIE!!!"
    }
}



//UI

// HEADER 


//Title

h1 = build('h2', 'display-4 text-center font-weight-bold', '', '', 'TIC TAC TOE')
titlecol = build('div', 'col-12', '', '', '', '')
titlerow = build('div', 'row', 'p-0', '', '', '')
titlecontainer = build('container', 'm-0', '', '', '')
header = build('header', 'my-5', '', '', '')

titlecol.appendChild(h1)
titlerow.appendChild(titlecol)
titlecontainer.appendChild(titlerow)
header.appendChild(titlecontainer)


// player box

var pboxcontainer = build('div', 'container', '', '', '');
var pboxrow = build('div', 'row m-3', '', '', '')
var pboxcol = build('div', 'col-6 mx-auto text-center', '', '', '')
var ptext = build('h4', '', '', '', "PLAYER: X STARTS \n GAME ON")

pboxcol.appendChild(ptext)
pboxrow.appendChild(pboxcol)
pboxcontainer.appendChild(pboxrow)
header.appendChild(pboxcontainer)

init.appendChild(header)

//MAIN






// footer.style.display = "none"
create();

//GAME THEORY 


