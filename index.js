document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu-polozky').classList.toggle('skryte');
  });

document.addEventListener("DOMContentLoaded", function() {
  var popupOverlay = document.querySelector(".popup-overlay");
  var subscribeButton = document.getElementById("subscribe_button");

  subscribeButton.addEventListener("click", function() {
    var nameInput = document.querySelector("input[name=jmeno]");
    var emailInput = document.querySelector("input[type=email]");
    
    var emailPattern = /^\S+@\S+\.\S+$/;

    if (nameInput.value !== "" && emailInput.value !== "") {
      if (emailPattern.test(emailInput.value)) {
        popupOverlay.classList.add("hidden");
        errorContainer.style.display = "none";
      } else {
        errorContainer.textContent = "Please enter a valid email address.";
        errorContainer.style.display = "block";
      }
    } else {
      errorContainer.textContent = "Please fill in all fields.";
      errorContainer.style.display = "block";
    }

});
});

const closeButton = document.getElementById("xmark");
const popupOverlay = document.getElementById("popup-overlay");

closeButton.addEventListener("click", function() {
  popupOverlay.classList.add("hidden");
  setTimeout(function() {
    popupOverlay.classList.add("closed");
  }, 1000);
});

