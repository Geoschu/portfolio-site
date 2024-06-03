document.addEventListener("DOMContentLoaded", () => {
  const gridItems = document.querySelectorAll(".grid .item");

  gridItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Remove active class from all items
      gridItems.forEach((i) => i.classList.remove("active"));
      // Add active class to the clicked item
      item.classList.add("active");
    });
  });
});
