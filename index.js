document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.menu-polozky').classList.toggle('skryte');
  });

  document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    var popupOverlay = document.querySelector(".popup-overlay");
    var subscribeButton = document.getElementById("subscribe_button");
  
    // Add event listener to the subscribe button
    subscribeButton.addEventListener("click", function() {
      // Hide the popup by adding a CSS class
      popupOverlay.classList.add("hidden");
    });
  });
  
