

// script.js

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatContainer = document.getElementById("chatContainer");

// Function to create a bubble message
function addMessage(content, isUser = true) {
  const messageBubble = document.createElement("div");
  messageBubble.classList.add("message-bubble", isUser ? "user" : "bot");
  messageBubble.textContent = content;

  chatContainer.appendChild(messageBubble);
  chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll
}
function botReply() {
  const responses = [
    "Hello!",
    "How are you?",
    "How can I help you?",
    "That's interesting!",
    "Can you tell me more?",
    "I'm here to chat!",
    "Have a great day! 😊",
    "Bye!"
  ];

  let index = 0; // Start from the first response

  function sendNextReply() {
    if (index < responses.length) {
      addMessage(responses[index], false); // Add the current response
      index++; // Move to the next response
      setTimeout(sendNextReply, 1000); // Wait 1 second, then send the next reply
    }
  }

  sendNextReply(); // Start the chain of replies
}


// Handle form submission
chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userMessage = chatInput.value.trim();

  if (userMessage) {
    addMessage(userMessage);
    chatInput.value = ""; // Clear input field
    botReply(); // Trigger bot reply
  }
});
