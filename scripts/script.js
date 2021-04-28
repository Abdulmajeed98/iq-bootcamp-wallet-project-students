document.addEventListener("DOMContentLoaded", doThis());

function doThis() {
  console.log("content Loaded");
  const createWalletBTN = document.getElementById("create-wallet");
  createWalletBTN.addEventListener("click", () => {
    console.log("btn clicked");
  });
}
