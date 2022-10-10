// Random function
function randomColor(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}
let color = randomColor(1,8)

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

//themes
let themes = [];
let colorSchema
class theme{
    constructor(primary, secondary, active, selection){
        this.primary = primary;
        this.secondary = secondary;
        this.active = active;
        this.selection = selection;
    }
}
let rosesTone = new theme ("#e11d48","#fda4af","active1","selection1");
let indigoTone = new theme ("#4f46e5","#a5b4fc","active2","selection2");
let emeraldTone = new theme ("#059669","#6ee7b7","active3","selection3");
let amberTone = new theme ("#d97706","#fcd34d","active4","selection4");
let limeTone = new theme ("#65a30d","#bef264","active5","selection5");
let cyanTone = new theme ("#0891b2","#67e8f9","active6","selection6");
let purpleTone = new theme ("#9333ea","#d8b4fe","active7","selection7");
let slateTone = new theme ("#475569","#cbd5e1","active8","selection8")

if(color == 1){
    colorSchema = rosesTone;
}else if (color == 2){
    colorSchema = indigoTone;
}else if(color == 3){
    colorSchema = emeraldTone;
}else if(color == 4){
    colorSchema = amberTone;
}else if(color == 5){
    colorSchema = limeTone;
}else if(color == 6){
    colorSchema = cyanTone;
}else if(color == 7){
    colorSchema = purpleTone;
}else if(color == 8){
    colorSchema = slateTone;
}
function randomColors(){
    // Selection color
    bodySelection.classList.add(colorSchema.selection)
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
}
randomColors();

// Tabs actives
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( colorSchema.active, "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += colorSchema.active;
    }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();