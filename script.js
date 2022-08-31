let calculate = document.querySelector("#calculate");

calculate.addEventListener("click", () => {
  let totalBill = document.querySelector("#totalBill").value;
  let tipPercent = document.querySelector("#tipPercent").value;
  let split = document.querySelector("#split").value;

  if (totalBill < 0) {
    alert("Enter the valid amount");
    totalBill = document.querySelector("#totalBill").value = 0;
  }

  //validate
  if (totalBill === "" || tipPercent == 0 || split == 0) {
    alert("Please enter values");
    return;
  }
  //calculate
  let total = (totalBill * tipPercent) / split;
  total = total.toFixed(2);

  document.getElementById("tip").innerHTML = total;
}); 













