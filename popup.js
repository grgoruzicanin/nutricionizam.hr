document.addEventListener("DOMContentLoaded", function(){
    createPopup();
    setTimeout(openPopup, 8000);
});
function createPopup() {
    var popupOverlay = document.createElement('div');
    popupOverlay.setAttribute("id", "popup-overlay");
    document.body.appendChild(popupOverlay);
    var popupWindow = document.createElement('div');
    popupWindow.setAttribute("id", "popup-window");
    popupOverlay.appendChild(popupWindow);
    var popupClose = document.createElement('div');
    popupClose.setAttribute("id", "popup-close");
    popupClose.setAttribute("onclick", "closePopup();");
    popupClose.innerHTML = "&#10006;";
    popupWindow.appendChild(popupClose);
    var popupTitle = document.createElement('div');
    popupTitle.setAttribute("id", "popup-title");
    popupTitle.innerHTML = "Besplatna analiza prehrane";
    popupWindow.appendChild(popupTitle);
    var popupSubtitle = document.createElement('div');
    popupSubtitle.setAttribute("id", "popup-subtitle");
    popupSubtitle.innerHTML = "Saznaj gdje u prehrani griješiš i na mail primi individualne preporuke za njeno unaprjeđenje od naših stručnjaka.";
    popupWindow.appendChild(popupSubtitle);
    var popupButton = document.createElement("a");
    popupButton.setAttribute("id", "popup-button");
    popupButton.setAttribute("href", "https://nutricionizam.hr/analiza-prehrane");
    popupButton.setAttribute("onclick", "analizaPopup();");
    popupButton.innerHTML = "Ispuni upitnik";
    popupWindow.appendChild(popupButton);

}
function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    ga('send', 'event', 'Pop up', 'zatvaranje', 'Pop up');
    var expires = "";
    var date = new Date();
    date.setTime(date.getTime() + (7*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
    document.cookie = "popupStatus" + "=" + ("closed" || "")  + expires + "; path=/";
}
function openPopup() {
    if(getCookie('popupStatus') != 'closed') {
        document.getElementById('popup-overlay').style.display = 'block';
        ga('send', 'event', 'Pop up', 'prikazivanje', 'Pop up');
    }
}
function analizaPopup() {
    ga('send', 'event', 'Pop up', 'analiza', 'Pop up');
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}