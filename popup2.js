document.addEventListener("DOMContentLoaded", function(){
    var location = window.location.href;
    var exclude1 = "usluge";
    var exclude2 = "analiza-prehrane";
    if(location.includes(exclude1) || location.includes(exclude2)) {
        return;
    }
    else {
        createPopup();
        setTimeout(openPopup, 16000);
    }
});
window.addEventListener('beforeunload', function(e) {
    if (document.getElementById('popup-overlay').style.display == 'block')
    {
        ga('send', {
            hitType: 'event',
            eventCategory: 'PopupDemo',
            eventAction: 'izlazak'
        }, {nonInteraction: true});
    }
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
    popupTitle.innerHTML = "Unaprijedi svoju prehranu";
    popupWindow.appendChild(popupTitle);
    var popupSubtitle = document.createElement('div');
    popupSubtitle.setAttribute("id", "popup-subtitle");
    popupSubtitle.innerHTML = "";
    popupWindow.appendChild(popupSubtitle);
    var popupButton = document.createElement("a");
    popupButton.setAttribute("id", "popup-button");
    popupButton.setAttribute("href", "https://nutricionizam.hr/usluge");
    popupButton.setAttribute("onclick", "povratakPopup();");
    popupButton.innerHTML = "nutricionizam.hr usluge";
    popupWindow.appendChild(popupButton);

}
function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    ga('send', {
        hitType: 'event',
        eventCategory: 'PopupDemo',
        eventAction: 'zatvoren'
    }, {nonInteraction: true});
    setCookie2('popupStatus2','closed', 7);
}
function openPopup() {
    if(getCookie2('popupStatus2') != 'closed') {
        document.getElementById('popup-overlay').style.display = 'block';
        ga('send', {
            hitType: 'event',
            eventCategory: 'PopupDemo',
            eventAction: 'prikazan'
        }, {nonInteraction: true});
    }
}
function povratakPopup() {
    ga('send', {
        hitType: 'event',
        eventCategory: 'PopupDemo',
        eventAction: 'povratak'
    });
    setCookie2('popupStatus2','closed', 1);
}
function setCookie2(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie2(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie2(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}