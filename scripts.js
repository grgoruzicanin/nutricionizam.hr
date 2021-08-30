document.addEventListener("DOMContentLoaded", function(){
    if(!document.getElementsByTagName('html')[0].hasAttribute('amp'))
    {
        var aTags = document.getElementsByTagName("a");
        var found;
        for (var i = 0; i < aTags.length; i++) {
            if (aTags[i].textContent.charAt(0) == "[" && aTags[i].textContent.charAt(aTags[i].textContent.length-1) == "]") {
                found = aTags[i];
                found.textContent=found.textContent.slice(1,-1);
                found.style.color="#fff";
                found.style.textAlign="center";
                found.style.textDecoration="none";
                found.style.textTransform="uppercase";
                found.style.fontFamily="'Jigsaw 2'";
                found.style.fontStyle="Normal";
                found.style.fontSize="15px";
                found.style.fontWeight="700";
                found.style.fontStretch="normal";
                found.style.letterSpacing="3px";
                found.style.lineHeight="normal";
                found.style.cursor="pointer";
                found.style.display="inline-block";
                found.style.width="auto";
                found.style.height="auto";
                found.style.padding="21px 34px";
                found.style.borderWidth="0";
                found.style.borderRadius="300px";
                found.style.backgroundColor="#00b38d";
                found.style.borderColor="#00b38d";
            }
        }
    }

});

window.fbAsyncInit = function() {
    FB.init({
      appId            : '303030063090247',
      autoLogAppEvents : false,
      xfbml            : true,
      version          : 'v3.1'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WMV3ST9');

$(document).ready(function() {
    $(document.body).prepend('<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMV3ST9" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>');
});

window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-836129863');

(function(h,o,t,j,a,r){
    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
    h._hjSettings={hjid:1992919,hjsv:6};
    a=o.getElementsByTagName('head')[0];
    r=o.createElement('script');r.async=1;
    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
    a.appendChild(r);
})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');