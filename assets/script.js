document.addEventListener("DOMContentLoaded", () => {
  const gridItems = document.querySelectorAll(".grid .item");

  gridItems.forEach((item) => {
    item.addEventListener("click", () => {
      const projectId = item.getAttribute("data-project");
      openModal(`modal-${projectId}`);
    });
  });
});

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close the modal when the user clicks anywhere outside of it
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
