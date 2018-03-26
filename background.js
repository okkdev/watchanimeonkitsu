
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo && changeInfo.status == 'complete' && tab.url.match("/kitsu.io/anime/")) {
		inject(tabId);
	}
});

chrome.browserAction.onClicked.addListener(function (tab) {
	alert("clicking on the extension doesn't do anything rn")
});

function inject(tabId) {
	chrome.tabs.executeScript(null, { file: "js/jquery/jquery.min.js" }, function() {
		chrome.tabs.executeScript(tabId, {
			file: 'inject/wheretowatch.js',
			runAt: "document_end"
		});
	});
}