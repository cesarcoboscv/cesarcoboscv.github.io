let tabContent = document.getElementsByClassName("tabcontent");
function openTab(tabName) {
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display ="none";
    }
    document.getElementById(tabName).style.display="block";
}
openTab('bentelerTab')