// Script to dynamically load the ToS body content
document.addEventListener("DOMContentLoaded", function() {
    const tosBodySection = document.getElementById("tos-body");
    fetch('/tos/v0.01/tos-body-v0.01.html')  // Adjust path depending on the version
      .then(response => response.text())
      .then(bodyContent => {
        tosBodySection.innerHTML = bodyContent;
      })
      .catch(error => {
        tosBodySection.innerHTML = "Error loading Terms of Service.";
        console.error("Error loading ToS body:", error);
      });
  });