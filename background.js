chrome.runtime.onInstalled.addListener(() => {
    console.log('FocusFlow installed and ready!');
  });
  
  chrome.alarms.onAlarm.addListener((alarm) => {
    alert(`Reminder: ${alarm.name}`);
  });
  