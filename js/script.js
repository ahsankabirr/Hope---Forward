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

  const alertTxt = document.getElementById("alert-text");
  const div = document.createElement("div");
  div.innerHTML = ``;

  alertTxt.appendChild(div);
  if (isNaN(payAmountFloat) || payAmountFloat < 0) {
    const alertTxt = document.getElementById("alert-text");
    alertTxt.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `<div role="alert" class="alert alert-error alert-soft">
  <span><i class="fa-solid fa-triangle-exclamation"></i>Wrong input</span>
</div>`;
    alertTxt.appendChild(div);
  } else {
    const alertTxt = document.getElementById("alert-text");
    alertTxt.innerHTML = "";
    document.getElementById("ukraineDonation").innerText = totalAmount;
    accountMoney(payAmountFloat);

    const okay = document.getElementById("success");
    const div = document.createElement("div");
    div.innerHTML = `
    <dialog
                  id="my_modal_5"
                  class="modal modal-bottom sm:modal-middle"
                >
                  <div class="modal-box">
                    <h3 class="text-lg font-bold text-center">
                      Congratulation <i class="fa-regular fa-circle-check text-green-500"></i>
                    </h3>
                    <img class="mx-auto" src="./assets/coin.png" alt="" />
                    <p class="py-4 text-center">
                      You Have Donated for War in Ukraine: Support for children
                      and families
                    </p>
                    <div class="modal-action">
                      <form method="dialog">
                        <!-- if there is a button in form, it will close the modal -->
                        <button class="btn">close confirmation</button>
                      </form>
                    </div>
                  </div>
                </dialog>
    `;
    okay.appendChild(div);
    my_modal_5.showModal();
  }
});
