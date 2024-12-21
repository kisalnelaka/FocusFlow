document.getElementById('openDashboard').addEventListener('click', () => {
    chrome.tabs.create({ url: 'dashboard.html' });
  });
  
  document.getElementById('openSettings').addEventListener('click', () => {
    chrome.runtime.openOptionsPage();
  });
  