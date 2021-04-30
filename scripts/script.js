document.addEventListener("DOMContentLoaded", doThis());
let transactionMode = 0;
function doThis() {
  const incomeBTN = document.getElementById("income");
  const expenseBTN = document.getElementById("expense");
  incomeBTN.addEventListener("click", (e) => {
    e.preventDefault();
    transactionMode = 0;
    incomeBTN.className = "income-active";
    expenseBTN.className = "expense-passive";
    console.log(transactionMode);
  });

  expenseBTN.addEventListener("click", (e) => {
    e.preventDefault();
    transactionMode = 1;
    incomeBTN.className = "income-passive";
    expenseBTN.className = "expense-active";
    console.log(transactionMode);
  });
}
