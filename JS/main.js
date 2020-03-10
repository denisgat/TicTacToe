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

    h1 = build('h1','text-center font-weight-bold','','','TIC TAC TOE')
    titlecol = build('div','col-12','','','','')
    titlerow = build('div','row','','','','')
    titlecontainer = build('container','','','','')
    header = build('header','my-5','','','')

    titlecol.appendChild(h1)
    titlerow.appendChild(titlecol)
    titlecontainer.appendChild(titlerow)
    header.appendChild(titlecontainer)
    init.appendChild(header)
    

//MAIN
main = build('main','container mx-auto','','','')
init.appendChild(main)

//game

let tilenumber = 0;
let gamerow = ""
let gamecall = ""

gamecontainer = build('div','container mx-auto p-0','','','')

for(let i=1; i <= 3; i++){
    gamerow = build('div','row border-top border-bottom mx-auto','row' + i,'min-height: 15vh; maxheight: 25vh; max-width: 50vw','');
    for(let j = 1; j <= 3; j++){
        tilenumber = tilenumber + 1
        gamecol = build('div', 'col-4 border-left border-right',tilenumber,'',tilenumber)
        gamerow.appendChild(gamecol)
    }
    gamecontainer.appendChild(gamerow)
}
main.appendChild(gamecontainer)
init.appendChild(main)


//FOOTER 

var footer = build('footer','my-5','','','','')
var footercontainer = build('div','container','','','');
var footerrow = build('div','row','','','')
var footercol = build('div','col-6 mx-auto','','','')
var resetbtn = build('button','btn btn-lg btn-primary btn-block','','','RESET GAME')

footercol.appendChild(resetbtn)
footerrow.appendChild(footercol)
footercontainer.appendChild(footerrow)
footer.appendChild(footercontainer)
init.appendChild(footer)




//GAME THEORY 
tiles = []
state = 1;

tile1 = document.getElementById('1')
    tiles.push(tile1)
tile2 = document.getElementById('2')
    tiles.push(tile2)
tile3 = document.getElementById('3')
    tiles.push(tile3)
tile4 = document.getElementById('4')
    tiles.push(tile4)
tile5 = document.getElementById('5')
    tiles.push(tile5)
tile6 = document.getElementById('6')
    tiles.push(tile6)
tile7 = document.getElementById('7')
    tiles.push(tile7)
tile8 = document.getElementById('8')
    tiles.push(tile8)
tile9 = document.getElementById('9')
    tiles.push(tile9)

console.log(tiles)

for(i = 1; i <= 9; i++){
    if(tiles[i].onclick() == true){
        n = tiles[i]
        clicked();
    }
}

function clicked(){
    if(state % 2 == 0){
        n.innerHTML = "X"
    }
    else{
        n.innerHTML = "O"
    }
    state += 1
}










