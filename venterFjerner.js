window.onload = function(){
    setTimeout(function(){
        try {
            document.querySelector("body").style.cssText = "visibility:visible !important;display: block !important;";
        } catch {};
        try {
            document.querySelector("html").style.cssText = "visibility:visible !important;display: block !important;";
        } catch {};
    }, 300);
}