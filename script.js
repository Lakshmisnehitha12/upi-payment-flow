const payButton = document.getElementById('payButton');
const statusBox = document.getElementById('status');

// Example UPI deep link
const upiLink = `upi://pay?pa=gudurulakhmisnehitha123@okicici&pn=Lakshmisnehitha&am=1.00&cu=INR`;

payButton.addEventListener('click', () => {
  statusBox.textContent = "Redirecting to UPI app...";
  statusBox.className = "status-box";
  
  // Open UPI app
  window.location.href = upiLink;

  // Simulate waiting for user to come back
  setTimeout(() => {
    showConfirmButton();
  }, 5000);
});

function showConfirmButton() {
  statusBox.innerHTML = `
    Please confirm payment below:<br>
    <button id="confirmBtn" class="confirm-btn">✅ Confirm Payment</button>
  `;
  document.getElementById('confirmBtn').addEventListener('click', simulatePaymentStatus);
}

function simulatePaymentStatus() {
  // Simulate random success/failure for demo
  const success = Math.random() > 0.3;
  if (success) {
    statusBox.textContent = "✅ Payment Successful!";
    statusBox.classList.add("success");
  } else {
    statusBox.textContent = "❌ Payment Failed or Not Confirmed.";
    statusBox.classList.add("failed");
  }
}
