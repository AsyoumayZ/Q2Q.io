const TOKEN_ADDRESS =
  "Not yet....";

const tokenAddress = document.getElementById("tokenAddress");
const copyButton = document.getElementById("copyButton");

tokenAddress.textContent = TOKEN_ADDRESS;

copyButton.addEventListener("click", async () => {
  await navigator.clipboard.writeText(TOKEN_ADDRESS);

  const originalText = copyButton.textContent;
  copyButton.textContent = "Copied!";

  setTimeout(() => {
    copyButton.textContent = originalText;
  }, 1500);
});
