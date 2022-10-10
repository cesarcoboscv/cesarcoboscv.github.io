const iconContainer = document.getElementById('iconContainer')
  
  let arregloIconos =[];
  let estructuraIconos;
  
  
class iconoDeHerramienta{
  constructor(imagen, texto, nombre) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.texto = texto;
  }
}
let revitIcon = new iconoDeHerramienta('https://drive.google.com/uc?export=view&id=1qj7Go9vFA_WYrs3Py2iaTtCUwSxRR9tf', 'Revit Logo', ' Revit');
let inventorIcon = new iconoDeHerramienta ('https://drive.google.com/uc?export=view&id=1zL1jlRoqzln7iB_SYEwW1TNt2JVcRRwi','Inventor Logo',' Inventor')
let autocadIcon = new iconoDeHerramienta ('https://drive.google.com/uc?export=view&id=1W22upnb3BY0-QIn2TUBTFC-7Y44N5aO6','AutoCAD Logo',' AutoCAD')
let solidIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1oQocKv1MWezeMU6ECi8CVLO7vRWc-Dkz","SolidWorks Logo","SolidWorks")
let pythonIcon = new iconoDeHerramienta ("https://drive.google.com/uc?export=view&id=1WSBCEu3ikzugJVJdX9tat208aH2uCkWP","Python Logo","Python")
let javascriptIcon = new iconoDeHerramienta ("https://drive.google.com/uc?export=view&id=17R07kHo3igxYyBaCbwM49eByvfFvNoAj","Javascript Logo","Javascript")
let htmlIcon = new iconoDeHerramienta ("https://drive.google.com/uc?export=view&id=1fiRQdoiQNSmQGNyv8YhVCaCcQBWLP9Fr","HTML 5 Logo","HTML 5")
let cssIcon = new iconoDeHerramienta ("https://drive.google.com/uc?export=view&id=1sCE9opP0dtTNdKlGHWJJSHjyUifLULtG","CSS 3 Logo","CSS 3")
let tailwindIcon = new iconoDeHerramienta ("https://drive.google.com/uc?export=view&id=1Sed5M9pki00_OjsYAX1Iq653MrbckbXm","Tailwind CSS Logo","Tailwind")
let sassIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1TdBjhyC661RMDDTnrGKxa9E8fvgGutjR","Sass Logo","Sass")
let gitIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1uzDkVHTElBgotG-No709re0yHevUDb91","Git Logo","Git")
let githubIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1NX-lyl7FoUynvlA4ZxTT23ZskzTShRPn","GitHub Logo","GitHub")
let vscodeicon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1OUnPV_9Gxa--zXLjYtObU_2Lck4IMDs4","Visual Studio Code Logo","VS Code")
let goolgeIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1oHDIvVewakJD6LmZKjBAItqlm7fx1cN-","Google Logo","Google")
let projectIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1dbpiZFP2yFnDwARTlI5B__PNipRoX1PN","Microsoft Project Logo","MS Project")
let photoshopIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1Qa4E26b3VN0Bav_HZujjGdSXQTpKhaE_","Photoshop Logo","Photoshop")
let notionIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=12ZSISqVOHFzZe9SZj6ujk05P5NxV2WQ1","Notion Logo","Notion")
let illustratorIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1k0ufripom9X6CgmrSaqv7NJvRi8cmbxK","Adobe Illustrator Logo","Illustrator")
let colabIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1P7TsOmeo188wQDbAmiFMiRst19Rr8kP_","Google Colab Logo","Colab")
let xdIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1XewZ9TkdKyC-1h7yJhdtkpQT8UF8giuO","Adobe XD Logo","Adobe XD")
let corelIcon = new iconoDeHerramienta("https://drive.google.com/uc?export=view&id=1U6lZ6q0v-Alk2EigoBtlyPVhZktdBVPm","Corel DRAW Logo","Corel DRAW")

arregloIconos.push(revitIcon,inventorIcon,autocadIcon,solidIcon,pythonIcon,javascriptIcon,htmlIcon,cssIcon,tailwindIcon,sassIcon,gitIcon,githubIcon,vscodeicon,goolgeIcon,projectIcon,photoshopIcon,notionIcon,illustratorIcon,colabIcon,xdIcon,corelIcon)

arregloIconos.forEach((iconoDeHerramienta)=>{
  estructuraIconos = `
  <div class="logoContainer flex justify-center flex-col items-center">
    <img width=40 height=40 src=${iconoDeHerramienta.imagen} alt=${iconoDeHerramienta.texto}/>
    <span translate="no" class="toolName text-xs">${iconoDeHerramienta.nombre}<span>
  </div>
  `
  iconContainer.innerHTML += estructuraIconos;
})




  