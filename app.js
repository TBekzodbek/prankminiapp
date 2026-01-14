const tg = window.Telegram.WebApp;

// Let Telegram know the app is ready
tg.ready();

// Expand app to full height
tg.expand();

// Get user info
const user = tg.initDataUnsafe?.user;

const userElement = document.getElementById("user");

if (user) {
  userElement.innerText = `Hello, ${user.first_name}!`;
} else {
  userElement.innerText = "Hello, guest!";
}

// Send data to bot
document.getElementById("sendBtn").addEventListener("click", () => {
  const data = {
    message: "Hello from Mini App",
    time: new Date().toISOString()
  };

  tg.sendData(JSON.stringify(data));
});
