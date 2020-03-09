// Initializing variables


//create id
var init= document.getElementById('init')
//create Element variables 
var header = document.createElement('header')
var main = document.createElement('main')
var divE = document.createElement('div')
var h1E = document.createElement("h1");                 
var buttonE = document.createElement("btn"); 

//create Text Variables                
var xtext = document.createTextNode("X"); 
var otext = document.createTextNode("O");

let outerelement = ""
let innerelementtxt = ""
let colnumber =""
let rownumber = ""
let innerelement = ""
let element = ""
let gamerow = ""
let gamecall = ""

document.body.className = "container bg-dark text-white mt-0"


function structure(outerelement,divrow, divcol, innerelement, innerelementtxt, innerelementclass){
    innerelement.innerHTML = innerelementtxt
    innerelement.className = innerelementclass
    
    
    divcol = document.createElement('div')
    divrow = document.createElement('div')
    
    
    divcol.className = "col-sm-12"
    divrow.className = "row"


    divcol.appendChild(innerelement)
    divrow.appendChild(divcol)
    outerelement.appendChild(divrow)
    init.appendChild(outerelement)
    
}

function build(elementtype, classname, id, style, htmlcontent){
    element = document.createElement(elementtype)
    element.className = classname
    element.id = id
    element.style = style
    element.innerHTML = htmlcontent
    return element
}



// HEADER 

//Title

    structure(header, 'titlerow' ,'titlecol',h1E,'TIC TAC TOE',"text-center font-weight-bold");
    header.className = "my-5"


    

//MAIN

main.className = "container mx-auto"
let tilenumber = 0;
gamecontainer = build('div','container mx-auto','','height: 40vh; width: 70vw','')

for(let i=1; i <= 3; i++){
    gamerow = build('div','row border-top border-bottom mx-auto','row' + i,'min-height: 15vh','');
    for(let j = 1; j <= 3; j++){
        tilenumber = tilenumber + 1
        console.log(tilenumber)
        gamecol = build('div', 'col-4 border-left border-right',tilenumber,'',tilenumber)
        gamerow.appendChild(gamecol)
    }
    gamecontainer.appendChild(gamerow)
}
main.appendChild(gamecontainer)
init.appendChild(main)
