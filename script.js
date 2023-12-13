let title = document.getElementById("changes_title");

let successmsg = document.getElementById("success-message").style.display;
let failmsg = document.getElementById("success-message").style.display;

function simulatePayment() {
  const amount = document.getElementById("amount").value;

  document.getElementById("success-message").style.display = "none";
  document.getElementById("failure-message").style.display = "none";

  simulatePaymentProcessing(amount)
    .then((isSuccess) => {
      if (isSuccess && amount) {
        document.getElementById("success-message").style.display = "block";
      } else if (!amount) {
        document.getElementById("failure-message").style.display = "block";
      }
    })
    .catch((error) => {
      alert(error);
      document.getElementById("failure-message").style.display = "block";
    });
}

function simulatePaymentProcessing(amount) {
  title.innerText = "Processing....";

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() < 0.8;

      if (isSuccess && amount > 0) {
        title.innerText = `${amount}Rs Successfully paid`;
        resolve(true);
      } else {
        reject(new Error("Payment failed"));
        title.innerText = "Payment failed";
      }
    }, 2000);
  });
}
