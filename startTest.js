let src = '';

chrome.storage.sync.get(['localUrl'], function (items) {
  src = items.localUrl;
})

let script45871 = document.createElement('script');
script45871.src = src;
script45871.async = false;
document.head.appendChild(script45871);

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        console.log(src);
      }
    }
);