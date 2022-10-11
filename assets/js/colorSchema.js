

//Constants
// Random title color
const titles = document.querySelectorAll(".rTitle");
// Random subtitle color
const subTitles = document.querySelectorAll(".rSubtitle");
// Random button color
const ctaButtonColor = document.querySelectorAll(".rBtnColor");
// Hover span color
const hoverSpan = document.querySelectorAll(".hoverSpan")
// Tabs color
const tabHover = document.querySelectorAll(".tablinks")
const bodySelection = document.getElementById("bodySelect")
const activeTab = document.getElementById('bentelerTab')
const tabBtnColor = document.getElementById('tab')


//Variables
let themes = [];
let colorSchema;

//General functions
// Random function
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}
//Selecting a random color
function randomColor(){
    let randomColor = randomNumber(0, themes.length -1);
    colorSchema = themes[randomColor];
}
//objects
//Constructors
class theme{
    constructor(name,primary, secondary, active, selection){
        this.name = name;
        this.primary = primary;
        this.secondary = secondary;
        this.active = active;
        this.selection = selection;
    }
}
//Objects
let rosesTone = new theme ("Roses Rone","#e11d48","#fda4af","active1","selection1");
let indigoTone = new theme ("Indigo Tone","#4f46e5","#a5b4fc","active2","selection2");
let emeraldTone = new theme ("Emerald Tone","#059669","#6ee7b7","active3","selection3");
let amberTone = new theme ("Amber Tone","#d97706","#fcd34d","active4","selection4");
let limeTone = new theme ("Lime Tone","#65a30d","#bef264","active5","selection5");
let cyanTone = new theme ("Cyan Tone","#0891b2","#67e8f9","active6","selection6");
let purpleTone = new theme ("Purple Tone","#9333ea","#d8b4fe","active7","selection7");
let slateTone = new theme ("Slate Tone","#475569","#cbd5e1","active8","selection8")
//Pushish objects to array
themes.push(rosesTone,indigoTone,emeraldTone,amberTone,limeTone,cyanTone,purpleTone,slateTone)
//Calling random color function to select a color
randomColor()
//Applying colors
function applyColor(){
    // Text selection color
    bodySelection.classList.add(colorSchema.selection);
    
    // Color titles
    for (let i = 0; i < titles.length; i++){
        titles[i].style.color = colorSchema.primary;
    }
    // Color subtitles
    for (let i = 0; i < subTitles.length; i++){
        subTitles[i].style.color = colorSchema.secondary;
    }
    // CTA button color
    for (let i = 0; i < ctaButtonColor.length; i++){
        ctaButtonColor[i].style.border ='2px solid' +  colorSchema.primary;
        ctaButtonColor[i].style.color = colorSchema.primary;
        ctaButtonColor[i].addEventListener('mouseover',function(){
            ctaButtonColor[i].style.backgroundColor = colorSchema.primary;
            ctaButtonColor[i].style.color = "white";
        });
        ctaButtonColor[i].addEventListener('mouseout',function(){
            ctaButtonColor[i].style.backgroundColor = "transparent";
            ctaButtonColor[i].style.color = colorSchema.primary;
        });
    }
    // Span hover color
    for (let i = 0; i < hoverSpan.length; i++){
        hoverSpan[i].addEventListener('mouseover',function(){
            hoverSpan[i].style.color = colorSchema.primary;
            hoverSpan[i].style.textDecoration ="underline"
            hoverSpan[i].style.textDecorationThickness ="2px";
        });
        hoverSpan[i].addEventListener('mouseout',function(){
            hoverSpan[i].style.color = "#1e293b";
            hoverSpan[i].style.textDecoration ="none"
        });
    }
    if(tabBtnColor){
        tabBtnColor.classList.add(colorSchema.active);
    }
}
//Applying random color
applyColor();

// Tabs actives

