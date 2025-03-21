import { getActiveTabURL } from "./utils";

let owlStatus = true;
let tabId;

chrome.tabs.onUpdated.addListener((tab) => {
  chrome.tabs.get(tab, (tabData) => {
    if (tabData.status === "complete"){
      setTimeout(() => {
        checkOwlStatus(tabData.id);
      }, 200)
    }
  })
});


function checkOwlStatus(tabId){
  chrome.scripting.executeScript(
    {
      target: {tabId: tabId},
      func: () => {
        return typeof owl !== "undefined";
      },
      world: "MAIN",
    },
    (results) => {
      if (typeof results !== "undefined"){
        owlStatus = results[0].result;
        chrome.action.setIcon({path: owlStatus ? "assets/icon128.png" : "assets/icon_disabled128.png"});
      }
    }
  );
}

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "DevtoolsTreePort");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if(message.type === "getOwlStatus"){
    getActiveTabURL().then((tab) => {
      if (tab){
        tabId = tab.id;
      }
      checkOwlStatus(tabId);
      sendResponse({result: owlStatus});
    })
    return true;
  }
  if(message.type === "Flush"){
    chrome.runtime.connect({name: "DevtoolsTreePort"}).postMessage({type: "Flush", paths: message.paths});
  }
  if(message.type === "SelectElement"){
    chrome.runtime.connect({name: "DevtoolsTreePort"}).postMessage({type: "SelectElement", path: message.path});
  }
  if(message.type === "StopSelector"){
    chrome.runtime.connect({name: "DevtoolsTreePort"}).postMessage({type: "StopSelector"});
  }
});


  
    
