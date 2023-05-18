const { hash } = window.location;
const decryptedMessage = atob(hash.replace("#", ""));
if (hash !== "") {
  document.querySelector("#message-show").classList.toggle("hide");
  document.querySelector("#message-form").classList.toggle("hide");
  document.querySelector("h1").innerText = decryptedMessage;
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  document.querySelector("#message-form").classList.toggle("hide");
  document.querySelector("#link-form").classList.toggle("hide");

  const input = document.querySelector("input");
  const encrypted = btoa(input.value);

  const linkInput = document.querySelector("#link-input");
  window.location.hash = "";
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
});
