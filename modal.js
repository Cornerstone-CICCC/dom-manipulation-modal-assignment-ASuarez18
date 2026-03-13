document.addEventListener("DOMContentLoaded", function () {
  const openModalButton = document.getElementById("openModal");
  const modal = document.getElementById("modal");

    // > Open modal on button click
    openModalButton.addEventListener("click", function () {
      modal.classList.remove("invisible");
      // > Timeout to close modal after 5 seconds
      setTimeout(() => {
        modal.classList.add("invisible");
      }, 5000);
    });

  // > Close modal on esc press
  document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      modal.classList.add("invisible");
    }
  });
});

// select button element

// add event listener on click to button
// remove class invisible from div modal

// add event listener on key press Escape
// add class invisible to div modal
