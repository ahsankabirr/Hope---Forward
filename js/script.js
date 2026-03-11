// Donation Btn

function accountMoney(amount) {
  const existAmount = document.getElementById("exist-Amount").innerText;
  const MoneyFloat = parseFloat(existAmount);

  let remainMoney = MoneyFloat - amount;
  document.getElementById("exist-Amount").innerText = remainMoney;
}

// Ukraine Donation
document.getElementById("donationBtn").addEventListener("click", () => {
  const DonationAmount1 = document.getElementById("donation-Amount1").value;
  const ukraineDonate = document.getElementById("ukraineDonation").innerText;

  const payAmountFloat = parseFloat(DonationAmount1);
  const amountFloat = parseFloat(ukraineDonate);
  const totalAmount = payAmountFloat + amountFloat;

  if (isNaN(payAmountFloat) || payAmountFloat < 0) {
    my_modal_5.showModal();
  } else {
    document.getElementById("ukraineDonation").innerText = totalAmount;

    accountMoney(payAmountFloat);
  }
});
