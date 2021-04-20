//UiO Gamlifiser utviklet av Luka Momcilovic

//BrukerOppgatering kontrollør
browser.tabs.onUpdated.addListener(runner);

function runner (details) {
	browser.storage.local.get(function (result) {
		if (result.onOff == true) {
			browser.tabs.executeScript(details.tabId, {file: "fjernTrash.js"});
		}
	});
}

//Upon first-installation populate the storage
browser.runtime.onInstalled.addListener(function (details) {
	try{
		if (details.reason == "install") {
			browser.storage.local.set({
				"onOff": true	
			});
		}
		browser.webNavigation.onDOMContentLoaded.addListener(runner);
		browser.tabs.onUpdated.addListener(runner);
	}
	catch{  }
});

//When browser is opened, turn gamlifiser on/off depending on storage
browser.storage.local.get(function (result) {
	if (result.onOff == true) {
		browser.webNavigation.onDOMContentLoaded.addListener(runner);
		browser.tabs.onUpdated.addListener(runner);
	}
	else if (result.onOff == false) {
		browser.webNavigation.onDOMContentLoaded.removeListener(runner);
		browser.tabs.onUpdated.removeListener(runner);
	}
});

//Message listener, listen for messages from popup.html
browser.runtime.onMessage.addListener(function (message, sender, response) {
	if(message == false) {
		browser.webNavigation.onDOMContentLoaded.removeListener(runner);
		browser.tabs.onUpdated.removeListener(runner);
	}
	else if(message == true) {
		browser.webNavigation.onDOMContentLoaded.addListener(runner);
		browser.tabs.onUpdated.addListener(runner);
	}
});