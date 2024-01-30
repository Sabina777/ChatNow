document.addEventListener('DOMContentLoaded', () => {
    const socket = io();
    const messagesContainer = document.getElementById('messages-container');
    const form = document.getElementById('form');
    const input = document.getElementById('input');
  
    // Generate a unique identifier for the user
    const userId = Math.random().toString(36).substring(7);
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (input.value.trim() !== '') {
        // Send message along with user information
        socket.emit('chat message', { message: input.value.trim(), userId });
        input.value = '';
      }
    });
  
    socket.on('chat message', (data) => {
      const item = document.createElement('div');
      item.textContent = `${data.userId}: ${data.message}`;
  
      // Check if the message is from the current user or other users
      if (data.userId === userId) {
        item.classList.add('user-message');
      } else {
        item.classList.add('other-user-message');
      }
  
      messagesContainer.appendChild(item);
      window.scrollTo(0, document.body.scrollHeight);
    });
  });
  