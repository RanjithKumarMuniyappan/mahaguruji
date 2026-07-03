document.getElementById("subscribeForm").addEventListener("submit", function(e) {
    e.preventDefault(); // prevent actual form submission

    const emailInput = document.getElementById("emailInput").value.trim();
    const message = document.getElementById("message");

    // simple email regex validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput)) {
      message.style.color = "#FFFFFF";
      message.innerText = "Please enter a valid email address.";
      message.style.display = "block";
      return;
    }

    // success message
    message.style.color = "#FFFFFF";
    message.innerText = "Thanks for contacting us, we will get back soon!";
    message.style.display = "block";

    // clear input
    document.getElementById("emailInput").value = "";
  });