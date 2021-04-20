//Select the slider etc.
var sliderOne = document.querySelector("#sliderOne");
sliderOne.addEventListener("click", save, false);
evaluateButton();

//Save function that activates when the slider is clicked
function save(e) {
    browser.storage.local.set({
        onOff: sliderOne.checked,
    }, function () {
        browser.runtime.sendMessage(sliderOne.checked);
        evaluateButton();
        browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
            browser.tabs.executeScript(tabs[0].tabId, {file: "hardReload.js"});
        });
    });
}

//Updates the slider based on storageData
function evaluateButton() {
    browser.storage.local.get(function (result) {
        if (result.onOff === true) {
            sliderOne.checked = true;
            browser.browserAction.setIcon({
                path: "ikonON.png"
            });
        }
        else if (result.onOff === false){
            sliderOne.checked = false;
            browser.browserAction.setIcon({
                path: "ikonOFF.png"
            });
        }
    });
}

//Issue-reporting-section. Initialize email.js
emailjs.init("user_bLkmQPWHQhBxoSQc6zq3h");

//This code sends an email of the website-url to the devs (with email.js) so the devs can know what subdomain on UiO.no
//...gets broken by the stylesheet-injection. The user clicks the button and the devs receive an email of the problematic-url.
//That way the devs can whitelist the subdomain so it works on that particular website
$("#issueText").click(function (event) {
    try{
        browser.tabs.query({
            currentWindow: true,
            active: true,
            status: "complete"
        }, function (info) {
            let url = info[0].url;
            var templateParams = {
                name: "Denne UiO siden fungerer ikke Luka.",
                notes: url,
            };
            $("#issueNotice").show().delay(3000).fadeOut(100);
            emailjs.send('undetectableadblocker', 'template_M88oUNIA', templateParams);
        });
    }
    catch{
    }
})