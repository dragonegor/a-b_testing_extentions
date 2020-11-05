
// Saves options to chrome.storage
function save_options() {
  let url = document.getElementById('address').value;
  chrome.storage.sync.set({
    localUrl: url,
  }, function() {
    // Update status to let user know options were saved.
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

function restore_options() {
    chrome.storage.sync.get(['localUrl'], function (items) {
      document.getElementById('address').value = items.localUrl;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
