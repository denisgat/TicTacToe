// Initializing variables


//create initial div variable so that elements created later are above JS in HTML
var init= document.getElementById('init')

//create Text Variables                
var xtext = document.createTextNode("X"); 
var otext = document.createTextNode("O");

document.body.className = "container bg-dark text-white mt-0"

function build(elementtype, classname, id, style, htmlcontent){
    element = document.createElement(elementtype)
    element.className = classname
    element.id = id
    element.style = style
    element.innerHTML = htmlcontent
    return element
}


//UI

// HEADER 

//Title

    h1 = build('h1','display-3 text-center font-weight-bold','','','TIC TAC TOE')
    titlecol = build('div','col-12','','','','')
    titlerow = build('div','row','','','','')
    titlecontainer = build('container','','','','')
    header = build('header','my-5','','','')

    titlecol.appendChild(h1)
    titlerow.appendChild(titlecol)
    titlecontainer.appendChild(titlerow)
    header.appendChild(titlecontainer)
    init.appendChild(header)
    
function create(){
//MAIN
main = build('main','container mx-auto','','','')
init.appendChild(main)

// player box
var pboxcontainer= build('div','container','','','');
var pboxrow = build('div','row m-3','','','')
var pboxcol = build('div','col-6 mx-auto text-center','','','')
var ptext = build('h3','','','',"PLAYER: X's TURN")

pboxcol.appendChild(ptext)
pboxrow.appendChild(pboxcol)
pboxcontainer.appendChild(pboxrow)
main.appendChild(pboxcontainer)

//game

let tilenumber = 0;
let gamerow = "";
let state = 0;
let win = [
    ["1","2","3"],
    ["4","5","6"],
    ["7","8","9"],
    ["7","5","3"],
    ["9","5","1"],
    ["1","4","7"],
    ["2","5","8"],
    ["3","6","9"]
]
let xarr = [];
let oarr = [];

gamecontainer = build('div','container mx-auto p-0','','','')

for(let i=1; i <= 3; i++){
    gamerow = build('div','row border-top border-bottom mx-auto','row' + i,'min-height: 15vh; height: 15vh; max-width: 30rem','');
    for(let j = 1; j <= 3; j++){
            tilenumber = tilenumber + 1
            gamecol = build('div', 'col-4 border-left border-right text-center display-4 pt-4',tilenumber,'','')
            gamecol.onclick = run;
            gamerow.appendChild(gamecol)
    }
        gamecontainer.appendChild(gamerow)
}
main.appendChild(gamecontainer)
init.appendChild(main)


function run(){
    if(this.innerHTML == ""){
        if(state % 2 == 0){
            this.innerHTML = "X"
            xarr.push(this.id)
            ptext.innerHTML = "PLAYER: O's TURN"

            for(i=0; i < win.length;i++){
                if(xarr.includes(win[i][0]) && 
                xarr.includes(win[i][1]) && 
                xarr.includes(win[i][2])){
                ptext.innerHTML = "PLAYER X WINS!!!"
                ptext.className = "display-4"
                }
                
            }
        }
        else{
            this.innerHTML = "O"
            oarr.push(this.id)
            ptext.innerHTML = "PLAYER: X's TURN"
            for(i=0; i < win.length;i++){
                if(oarr.includes(win[i][0]) && 
                oarr.includes(win[i][1]) && 
                oarr.includes(win[i][2])){

                ptext.innerHTML = "PLAYER O WINS!!!"
                ptext.className = "display-4"
                }
            }
        }
        state += 1
    }
    else{
    }
}


//FOOTER 

var footer = build('footer','my-5','','','','')
var footercontainer = build('div','container','','','');
var footerrow = build('div','row','','','')
var footercol = build('div','col-6 mx-auto','','','')
var resetbtn = build('button','btn btn-lg btn-primary btn-block','btn1','','RESET GAME')

footercol.appendChild(resetbtn)
footerrow.appendChild(footercol)
footercontainer.appendChild(footerrow)
footer.appendChild(footercontainer)
init.appendChild(footer)

resetbtn.onclick = function clear(){
    main.innerHTML = '';
    footer.innerHTML = '';
    create();
}
console.log(state)
}

// footer.style.display = "none"
create();

//GAME THEORY 


