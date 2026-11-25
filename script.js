const button = document.getElementById("actionBtn");
const message = document.getElementById("message");

let count = 0;

button.addEventListener("click", () => {
  count += 1;
  message.textContent = `ボタンが ${count} 回押されました！`;
});