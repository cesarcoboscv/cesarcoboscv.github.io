// Random function
function randomColor(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}
let color = randomColor(1,5)


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

if(color == 1){
    // Rose tones
    var primary="#e11d48";
    var secondary ="#fda4af";
    var actives ="active1";
    var selectionColor ="selection1";
}else if (color == 2){
    // Indigo tones|
    var primary="#4f46e5";
    var secondary ="#a5b4fc";
    var actives ="active2";
    var selectionColor ="selection2";
}else if(color == 3){
    // Emerald tones
    var primary="#059669";
    var secondary ="#6ee7b7";
    var actives ="active3"; 
    var selectionColor ="selection3";
}else if(color == 4){
    // Amber tones
    var primary="#d97706";
    var secondary ="#fcd34d";
    var actives ="active4"; 
    var selectionColor ="selection4";
}else if(color == 5){
    // Lime tones
    var primary="#65a30d";
    var secondary ="#bef264";
    var actives ="active5";  
    var selectionColor ="selection5";
}else if(color == 6){
    // Cyan tones
    var primary="#0891b2";
    var secondary ="#67e8f9";
    var actives ="active6"; 
    var selectionColor ="selection6";
}else if(color == 7){
    // Purple tones
    var primary="#9333ea2";
    var secondary ="#d8b4fe";
    var actives ="active7"; 
    var selectionColor ="selection7";
}
randomColors(primary,secondary);


function randomColors(primaryColor, secondaryColor){
    // Selection color
    bodySelection.classList.add(selectionColor)
    // Color titles
    for (let i = 0; i < titles.length; i++){
        titles[i].style.color = primaryColor;
    }
    // Color subtitles
    for (let i = 0; i < subTitles.length; i++){
        subTitles[i].style.color = secondaryColor;
    }
    // CTA button color
    for (let i = 0; i < ctaButtonColor.length; i++){
        ctaButtonColor[i].style.border ='2px solid' +  primaryColor;
        ctaButtonColor[i].style.color = primaryColor;
        ctaButtonColor[i].addEventListener('mouseover',function(){
            ctaButtonColor[i].style.backgroundColor = primaryColor;
            ctaButtonColor[i].style.color = "white";
        });
        ctaButtonColor[i].addEventListener('mouseout',function(){
            ctaButtonColor[i].style.backgroundColor = "transparent";
            ctaButtonColor[i].style.color = primaryColor;
        });
    }
    // Span hover color
    for (let i = 0; i < hoverSpan.length; i++){
        hoverSpan[i].addEventListener('mouseover',function(){
            hoverSpan[i].style.color = primaryColor;
            hoverSpan[i].style.textDecoration ="underline"
            hoverSpan[i].style.textDecorationThickness ="2px";
        });
        hoverSpan[i].addEventListener('mouseout',function(){
            hoverSpan[i].style.color = "#1e293b";
            hoverSpan[i].style.textDecoration ="none"
        });
    }
}

// Tabs actives
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace( actives, "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += actives;
    }
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();