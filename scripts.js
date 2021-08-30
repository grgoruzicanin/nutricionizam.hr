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