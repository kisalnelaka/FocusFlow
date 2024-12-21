document.addEventListener('DOMContentLoaded', () => {
    const username = 'John'; // Example user data
    document.getElementById('username').textContent = username;
  
    const agenda = ['Complete task A', 'Prepare meeting notes', 'Take a short walk'];
    const agendaList = document.getElementById('agendaList');
    
    agenda.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      agendaList.appendChild(li);
    });
  
    document.getElementById('openPomodoro').addEventListener('click', () => {
      alert('Pomodoro started!');
    });
  
    document.getElementById('addQuickNote').addEventListener('click', () => {
      const note = prompt('Enter a quick note:');
      if (note) {
        alert(`Note saved: ${note}`);
      }
    });
  });
  