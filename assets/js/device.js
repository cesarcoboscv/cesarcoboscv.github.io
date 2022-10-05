// Device detention
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

    var mobileBar = document.getElementById("mobileBar");
    var menuBar = document.getElementById("menuBar");
    var navBar = document.getElementById("navbar");
    var header = document.getElementById("header")
    var bg = document.getElementById("back")

if(deviceType() == "mobile" ){  
    // if device detection == mobile, then do
    // hide  menu bar for bigger displays
    menuBar.classList.add("hidden");
    menuBar.classList.remove("flex");
    // show mobile menu bar
    mobileBar.classList.add("flex");
    // set blur and opacity filter to backgound
    bg.style.filter="blur(8px) opacity(.6)";

    // Now if a mobile is detected then activate parallax efect
    window.addEventListener("scroll", function () { 
        var positionY= window.scrollY
        // converting scroll value to background Y movement
        bg.style.backgroundPosition=   ((positionY * .2 )  + 'px 0px');
    })

    }else if(deviceType() =="tablet"){
        menuBar.classList.remove("hidden")
        menuBar.classList.add("flex")
        mobileBar.classList.add("hidden")
        header.classList.remove("bottom-0")
    } else {
        // If a desktop is detected then show the menu bar
        menuBar.classList.remove("hidden")
        menuBar.classList.add("flex")
        // and hide de mobile bar
        mobileBar.classList.remove("flex")
        mobileBar.classList.add("hidden")
        // and move the menu bar to top 
        header.classList.remove("bottom-0")
        // set a new value for blur and opacity background filter
        bg.style.filter="blur(12px) opacity(.4)";
        // and a mouse movemente is applied to backgroound
        document.addEventListener('mousemove', mouse_position)
        function mouse_position()
        {
            // detecting mouse position
            var e = window.event;
            posX = e.clientX;
            posY = e.clientY;
            // converting mouse position to background movement
            bg.style.backgroundPosition= (posX * .1) + 'px ' + (posY*.1) + 'px';
        }
        
}
// hidden message
positionYsole.log("Meow")