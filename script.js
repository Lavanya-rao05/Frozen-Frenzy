let currentDish = "";

function confirmPurchase(dishName) {
  currentDish = dishName;
  document.getElementById(
    "modalText"
  ).innerText = `Do you want to buy ${dishName}?`;
  document.getElementById("purchaseModal").style.display = "block";
}

function closeModal() {
  document.getElementById("purchaseModal").style.display = "none";
}

function confirmYes() {
  alert(
    `Thank you for your purchase! The ${currentDish} will be delivered soon.`
  );
  closeModal();
}

function confirmNo() {
  closeModal();
}

window.onclick = function (event) {
  const modal = document.getElementById("purchaseModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
