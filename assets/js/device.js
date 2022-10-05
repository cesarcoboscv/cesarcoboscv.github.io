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

if(deviceType() == "mobile" ){  
    menuBar.classList.add("hidden");
    menuBar.classList.remove("flex");
    
    mobileBar.classList.add("flex");

    }else if(deviceType() =="tablet"){
        menuBar.classList.remove("hidden")
        menuBar.classList.add("flex")

        mobileBar.classList.add("hidden")

        header.classList.remove("bottom-0")
    } else {
        menuBar.classList.remove("hidden")
        menuBar.classList.add("flex")

        mobileBar.classList.remove("flex")
        mobileBar.classList.add("hidden")

        header.classList.remove("bottom-0")
        console.log("Esto es una computadora")
        
}
console.log("Meow")