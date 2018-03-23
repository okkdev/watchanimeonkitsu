
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete') {
		chrome.tabs.executeScript(tabId, {
			file: 'inject/wheretowatch.js',
			runAt: "document_end"
		});
	}
});