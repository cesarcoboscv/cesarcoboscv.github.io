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

if(deviceType() == "mobile" ){  
    menuBar.classList.add("hidden");
    mobileBar.classList.add("flex");
    // fixed bottom-0 md:top-0
    navBar.classList.add("fixed");
    navBar.classList.add("bottom-0")
    navBar.classList.add("md:top-0")

}else{
    menuBar.classList.add("flex")
    navBar.classList.remove("bottom-0")
    mobileBar.classList.add("hidden")
}