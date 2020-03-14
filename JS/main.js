// Initializing variables


//create initial div variable so that elements created later are above JS in HTML
var init = document.getElementById('init')

//game global variables 
let gamerow;
let ai = false
let tilenumber = 0;
let state = 0;
var winner1 = 0;
var winner2 = 0;
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
let toggle = 0;
let winning = false

document.body.className = "container bg-dark text-white mt-0"

//---------------------------------------------------FUNCTIONS----------------------------------------------------------\\

// Main function that is utilized to build up HTML elements with custom parameters for the elements.
function build(elementtype, classname, id, style, htmlcontent) {
    element = document.createElement(elementtype)
    element.className = classname
    element.id = id
    element.style = style
    element.innerHTML = htmlcontent
    return element
}


//sets up the first option for two player or AI
function begin(){
    pboxcontainer.style.display = "none"
    winnerscontainer.style.display = "none"

    footerbtns();

    btn1.style.display = "none"
    btn4.style.display ="none"

    //once two player is clicked
    btn3.onclick = btn3run;
}


//when two player is clicked
function btn3run(){
    state = 0;
    toggle = 0
    pboxcontainer.style.display = "block"
    winnerscontainer.style.display = "block"
    winner1 = 0;
    winner2 = 0;
    winner1text.innerHTML = `Player 1 WINS: ${winner1}`
    winner2text.innerHTML = `Player 2 WINS: ${winner2}`

    init.removeChild(footer)
    create();
    footerbtns();
    btn4.style.display ="none"
    btn3.style.display = "none"
    btn2.style.display = "none"
    // btn1.style.display = "block"1`21`

    ptext.innerHTML = "PLAYER 2: O STARTS GAME ON!"
    ptext.style.color = "dodgerblue"

}

//function that constructs the main board of game 

function create() {
    main = build('main', 'container mx-auto', '', '', '')
    init.appendChild(main)

    gamecontainer = build('div', 'container mx-auto p-0', '', '', '')

    //LOOPs that cycles through through 3 row and within each row creates 3 columns

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
}

//function that constructs the footer with buttons

function footerbtns(){

    //Creating footer and button variable elements

    var footer = build('footer', 'my-5 p-1','footer', '', '', '')
    var footercontainer = build('div', 'container p-0', '', 'max-width: 30rem;', '');
    var footerrow = build('div', 'row', '', 'max-width: 33rem', '')
    var footercol1 = build('div', 'col-5', '', 'left: 0px', '')
    var footercol2 = build('div', 'offset-2 col-5','', '','')
    var resetbtn = build('button','btn btn-lg btn-outline-primary btn-block', 'btn1', '', 'RESET')
    var AIbtn = build('button','btn btn-lg btn-outline-primary btn-block', 'btn2', '', 'PLAY AI')
    var twoplayerbtn = build('button','btn btn-lg btn-outline-primary btn-block m-0', 'btn3', '', 'TWO PLAYER')
    var newgamebtn = build('button','btn btn-lg btn-primary btn-block m-0','btn4', 'background-color: crimson;', 'NEW GAME')

    //appending footer 

    footercol1.appendChild(resetbtn)
    footercol1.appendChild(twoplayerbtn)
    footercol2.appendChild(AIbtn)
    footercol2.appendChild(newgamebtn)
    footerrow.appendChild(footercol1)
    footerrow.appendChild(footercol2)
    footercontainer.appendChild(footerrow)
    footer.appendChild(footercontainer)
    init.appendChild(footer)

    btn1.style.display = "none"


    //when the rest button is pressed

    resetbtn.onclick = function clear() {
        //clears the gaming board and btns so that they can be reconstructed in the correct order
        init.removeChild(main);
        init.removeChild(footer);

        //sets inital variables to reset game 
        tilenumber = 0;
        gamerow = "";
        xarr = [];
        oarr = [];
        toggle++
        resetbtn.innerHTML = "PLAY AGAIN"
        ptext.style.color = "white";
        winning = false
        create();
        footerbtns();
        btn2.style.display = "none"
        btn3.style.display = "none"
        btn4.style.display ="none"
        
        //alternating between x and o starting the game
        if(toggle % 2 == 0){
            ptext.innerHTML = "PLAYER 1: X STARTS GAME ON!"
            ptext.style.color = "crimson"
            state = 0;
        }
        else{
            ptext.innerHTML = "PLAYER 2: O STARTS GAME ON!"
            ptext.style.color = "dodgerblue"
            state = 1;
        }
    }
}

//funciton that runs once any of the columns that were created in tic tac toe grid based on their id

function run() {
    //shows reset button and hides the 2 player and AI btns
    btn1.style.display = "block"
    btn2.style.display = "none"
    btn3.style.display ="none"

    //makes sure that the column being pressed is empty and that no one has won the game yet.

    if (this.innerHTML == "" && winning == false){
        //checks that state is even so that X is placed in column
        if (state % 2 == 0) {
            this.innerHTML = "X"
            this.style.color = "crimson"
            xarr.push(this.id)
            ptext.innerHTML = "PLAYER 2: O's TURN"
            ptext.style.color = "dodgerblue"
            //checks whether any of the O btn combonations clicked match any of the winning combos in tic tac toe
            for (i = 0; i < win.length; i++) {
                if (xarr.includes(win[i][0]) &&
                    xarr.includes(win[i][1]) &&
                    xarr.includes(win[i][2])) {

                    //takes the winning 3 columns and changes their background color
                    for(let j = 0;j < win[i].length; j++){
                        document.getElementById(win[i][j]).style.backgroundColor = "green"             
                    }

                    ptext.style.color = "forestgreen";
                    ptext.innerHTML = "PLAYER 1: X WINS!!!"
                    ptext.className = "display-5 text-center"
                    btn1.style.backgroundColor = "green"
                    btn1.innerHTML = "PLAY AGAIN"
                    winning = true
                    btn4.style.display ="block"
                    btn1.className = 'btn btn-lg btn-primary btn-block'

                    //changes the score when X wins
                    winner1++
                    winner1text.innerHTML = `Player 1 WINS: ${winner1}`
                    
                }
            }
        }
        //when state is odd O is palced in the column
        else {
            this.innerHTML = "O"
            oarr.push(this.id)
            this.style.color = "dodgerblue"
            ptext.innerHTML = "PLAYER 1: X's TURN"
            ptext.style.color = "crimson"

            //checks whether any of the O btn combonations clicked match any of the winning combos in tic tac toe
            for (i = 0; i < win.length; i++) {
                if (oarr.includes(win[i][0]) &&
                    oarr.includes(win[i][1]) &&
                    oarr.includes(win[i][2])) {

                    //takes the winning 3 columns and changes their background color

                    for(let j = 0;j < win[i].length; j++){
                       document.getElementById(win[i][j]).style.backgroundColor = "green"             
                    }


                    ptext.style.color = "forestgreen";
                    ptext.innerHTML = "PLAYER 2: O WINS!!!"
                    ptext.className = "display-5 text-center"
                    btn1.style.backgroundColor = "green"
                    btn1.innerHTML = "PLAY AGAIN"
                    btn1.className = 'btn btn-lg btn-primary btn-block'
                    winning = true
                    btn4.style.display ="block"
                
                    //changes the score when O wins
                    winner2++
                    winner2text.innerHTML = `Player 2 WINS: ${winner2}`
                }
            }
        }
        //changes state 
        state++
    }
    //Making sure that when x starts the tie will still be the same as when o starts.
    if(toggle % 2 == 0){
        if(state >= 9 && winning == false ){
            ptext.style.color = "yellow";
            ptext.innerHTML = "ITS A TIE!!!"
            btn1.style.backgroundColor = "yellow"
            btn1.style.color = "black";
            btn1.innerHTML = "PLAY AGAIN"
            btn1.className = 'btn btn-lg btn-primary btn-block'
            btn4.style.display ="block"
        }
    }

    else{
        if(state >= 10 && winning == false ){
            ptext.style.color = "yellow";
            ptext.innerHTML = "ITS A TIE!!!"
            btn1.style.backgroundColor = "yellow"
            btn1.style.color = "black";
            btn1.innerHTML = "PLAY AGAIN"
            btn1.className = 'btn btn-lg btn-primary btn-block'
            btn4.style.display ="block"
        }
    }   
    //when newgame is clicked
    btn4.onclick = function btn4run(){
        pboxcontainer.style.display = "none"
        winnerscontainer.style.display = "none"
        init.removeChild(main)
        init.removeChild(footer)
        footerbtns();
        btn1.style.display = "none"
        btn4.style.display ="none"
        //when two player button is clicked after newgame
        btn3.onclick = btn3run;
    }

}



//-------------------------------------------------------USER INTERFACE HEADER----------------------------------------\\



//Title

h1 = build('h2', 'display-4 text-center font-weight-bold', '', '', 'TIC TAC TOE')
titlecol = build('div', 'col-12', '', '', '', '')
titlerow = build('div', 'row', 'p-0', '', '', '')
titlecontainer = build('container', 'm-0', '', '', '')
header = build('header', 'my-4', '', '', '')

titlecol.appendChild(h1)
titlerow.appendChild(titlecol)
titlecontainer.appendChild(titlerow)
header.appendChild(titlecontainer)


// Player box

var pboxcontainer = build('div', 'container', 'pboxcontainer', '', '');
var pboxrow = build('div', 'row my-3', '', '', '')
var pboxcol = build('div', 'col-12 mx-auto text-center', '', '', '')
var ptext = build('h4', '', '', '',"PLAYER 1: X STARTS GAME ON!")
ptext.style.color = "crimson"

pboxcol.appendChild(ptext)
pboxrow.appendChild(pboxcol)
pboxcontainer.appendChild(pboxrow)
header.appendChild(pboxcontainer)

//winners row



var winnercontainer = build('div', 'container','winnerscontainer', 'max-width: 30rem;', '');
var winnersrow = build('div', 'row', '', '', '')
var winner1col = build('div', 'col-6 mx-auto text-center', '', '', '')
var winner2col = build('div', 'col-6 mx-auto text-center', '', '', '')
var winner1text = build('h5', '', '', '',`Player 1 WINS: ${winner1}`)
var winner2text = build('h5', '', '', '',`Player 2 WINS: ${winner2}`)

winner1col.appendChild(winner1text)
winner2col.appendChild(winner2text)
winnersrow.appendChild(winner1col)
winnersrow.appendChild(winner2col)
winnercontainer.appendChild(winnersrow)
header.appendChild(winnercontainer)

//initializing the header into the HTML
init.appendChild(header)

begin();










