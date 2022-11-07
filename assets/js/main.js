let herobg = document.getElementById("hero");
let herolayer = document.getElementById("hero-layer")
let navBar = document.getElementById("full-navbar");

// Device detection
const deviceType = () => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
};
if(deviceType() == "mobile"){
    navBar.style.display = "none";
}


//nav Color Scroll
navBar.style.height ="128px";
window.onscroll = function(){
    if (document.documentElement.scrollTop >= 80){
        navBar.style.backgroundColor = "#000000e0";
        navBar.style.height ="96px";
    } else{
        navBar.style.backgroundColor ="transparent";
        navBar.style.height ="128px";
    }
}


// Background Parallax effect

window.addEventListener("scroll", function () { 
    let con= window.scrollY
    herobg.style.backgroundPosition= '50% '+  ((con * -.5 )  + 'px');
    // herobg.style.filter = 'grayscale(100%)';
})

//Hero background
let randomBackground
let bgimages=[];
function randomNumber(min,max){
    return Math.floor(Math.random() * (max - min +1) + min);
}
class bgImage{
    constructor(url){
        this.url = url;}
}
let hero01 = new bgImage("https://drive.google.com/uc?export=view&id=134jjzLe4vuQAymL8MNZARW7ABFtPORmw")
let hero02 = new bgImage("https://drive.google.com/uc?export=view&id=1LNBWkmDbz-SS4DCX-gAhVbPV_1rqM2vF")
let hero03 = new bgImage("https://drive.google.com/uc?export=view&id=1v9lzPnWZ8gguzP6FOtYQEm17znUveCuz")
// let hero04 = new bgImage("https://drive.google.com/uc?export=view&id=1PRrJl8y9u9rElpXV7XmYi8pK86-kev84")
// let hero05 = new bgImage("https://drive.google.com/uc?export=view&id=1CDXToGqqCJN7K2jwm8JH7pD58c6lQT4x")
// let hero06 = new bgImage("https://drive.google.com/uc?export=view&id=1wP3cZOfbyLJjywGDI3gkRxSRgAlkssSx")
// let hero07 = new bgImage("https://drive.google.com/uc?export=view&id=1oAvNI2McpbrmDZXK2NfytrZcVrQBFzG0")
// let hero08 = new bgImage("https://drive.google.com/uc?export=view&id=1f1Gmj2J6tlVUNXvU7TkhdgU3ZpIMJk8N")


bgimages.push(hero01,hero02,hero03);

function randomImage(){
    let randomImage = randomNumber(0, bgimages.length -1);
    return bgRandom =  bgimages[randomImage];
}
randomImage()
herobg.style.backgroundImage = `url("${bgRandom.url}")`;


let toolIcon;
let engineeringIcons = [];
let devIcons = [];
class toolBg{
    constructor(id,url,name){
        this.id = id;
        this.url = url;
        this.name = name;
    }
}
let autoCAD = new toolBg("autocadIcon","https://drive.google.com/uc?export=view&id=1W22upnb3BY0-QIn2TUBTFC-7Y44N5aO6","AutoCAD")
let inventor = new toolBg("inventorIcon","https://drive.google.com/uc?export=view&id=1zL1jlRoqzln7iB_SYEwW1TNt2JVcRRwi","Inventor")
let solidworks = new toolBg("solidworksIcon","https://drive.google.com/uc?export=view&id=1oQocKv1MWezeMU6ECi8CVLO7vRWc-Dkz","SolidWorks")
let revit = new toolBg("revitIcon","https://drive.google.com/uc?export=view&id=1qj7Go9vFA_WYrs3Py2iaTtCUwSxRR9tf","Revit")
let project = new toolBg("projectIcon","https://drive.google.com/uc?export=view&id=1dbpiZFP2yFnDwARTlI5B__PNipRoX1PN","Project")
let microsoft = new toolBg("microsoftIcon","https://drive.google.com/uc?export=view&id=12PyqzFC_SJOLoY6Rk-WnI0rYuWu9jhsQ","Microsoft")
let google = new toolBg("googleIcon","https://drive.google.com/uc?export=view&id=1oHDIvVewakJD6LmZKjBAItqlm7fx1cN-","Google")

let vscode = new toolBg("vscodeIcon","https://drive.google.com/uc?export=view&id=1OUnPV_9Gxa--zXLjYtObU_2Lck4IMDs4","VS Code")
let tailwind = new toolBg("tailwindIcon","https://drive.google.com/uc?export=view&id=1Sed5M9pki00_OjsYAX1Iq653MrbckbXm","TailwindCSS")
let sass = new toolBg("sassIcon","https://drive.google.com/uc?export=view&id=1TdBjhyC661RMDDTnrGKxa9E8fvgGutjR","Sass")
let python = new toolBg("pyhtonIcon","https://drive.google.com/uc?export=view&id=1WSBCEu3ikzugJVJdX9tat208aH2uCkWP","Python")
let javascript = new toolBg("javascriptIcon","https://drive.google.com/uc?export=view&id=17R07kHo3igxYyBaCbwM49eByvfFvNoAj","JavaScript")
let autolisp = new toolBg("autolispIcon","https://drive.google.com/uc?export=view&id=1o_M1U90dEwEGcTtXN4g5ml4ayAJ5vFnu","AutoLISP")
let git = new toolBg("gitIcon","https://drive.google.com/uc?export=view&id=1uzDkVHTElBgotG-No709re0yHevUDb91","Git")
let github = new toolBg("githubIcon","https://drive.google.com/uc?export=view&id=1NX-lyl7FoUynvlA4ZxTT23ZskzTShRPn","GitHub")
// let sass = new toolBg("sassIcon","https://drive.google.com/uc?export=view&id=1TdBjhyC661RMDDTnrGKxa9E8fvgGutjR","Sass")
// let sass = new toolBg("sassIcon","https://drive.google.com/uc?export=view&id=1TdBjhyC661RMDDTnrGKxa9E8fvgGutjR","Sass")
// let sass = new toolBg("sassIcon","https://drive.google.com/uc?export=view&id=1TdBjhyC661RMDDTnrGKxa9E8fvgGutjR","Sass")


engineeringIcons.push(autoCAD,inventor,revit,autolisp,solidworks,project,microsoft,google)
devIcons.push(python,javascript,vscode,tailwind,sass,git,github)

const engineeringGrid = document.getElementById("engineering-tools")
for (let i = 0; i < engineeringIcons.length; i++) {
    const gridTool =`
        <div class="icon-container">
            <span id="${engineeringIcons[i].id}" class="${engineeringIcons[i].name}"></span>
            <p> ${engineeringIcons[i].name}</p>
        </div>
        `
        engineeringGrid.innerHTML += gridTool
        const icon = document.getElementById(`${engineeringIcons[i].id}`)
        icon.style.backgroundImage = `url("${engineeringIcons[i].url}")`
}
const devGrid = document.getElementById("dev-tools")
for (let i = 0; i < devIcons.length; i++) {
    const devGridTool =`
        <div class="icon-container ">
            <span id="${devIcons[i].id}" class="${devIcons[i].name}"></span>
            <p> ${devIcons[i].name}</p>
        </div>
        `
        devGrid.innerHTML += devGridTool
        const icon = document.getElementById(`${devIcons[i].id}`)
        icon.style.backgroundImage = `url("${devIcons[i].url}")`
}


// engineeringIcons.forEach((toolBg)=>{
//     const gridTool =`
//         <span class="${toolBg.name}"> Hola
//     `
//     toolGrid.innerHTML += gridTool
// })

