navBar = document.getElementById("navbar");

window.onscroll = function () {
    if (document.documentElement.scrollTop >= 80) {
        navBar.classList.add("bg-neutral-900");
        navBar.classList.remove("bg-[rgba(252,252,252,0.15)]")
        navBar.classList.remove("text-black")
        navBar.classList.add("text-white")
    } else {
        navBar.classList.remove("bg-neutral-900");
        navBar.classList.add("bg-[rgba(252,252,252,0.15)]")
        navBar.classList.add("text-black")
        navBar.classList.remove("text-white")
    }
}