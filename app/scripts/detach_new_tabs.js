'use strict';

var detachTab = function(tab) {
  // ignore the first tab in each window
  if (tab.index === 0) {
    return;
  }

  chrome.tabs.remove(tab.id);
};

chrome.tabs.onCreated.addListener(detachTab);
