const wrappers = document.querySelectorAll(".acc-wrapper");

wrappers.forEach((clickedWrapper) => {
  clickedWrapper.addEventListener("click", function () {
    const wasActive = clickedWrapper.classList.contains("active");

    wrappers.forEach((wrapper) => {
      wrapper.classList.remove("active");
      wrapper.querySelector(".panels").style.display = "none";
      const arrow = wrapper.querySelector(".accordion-arrow");
      if (arrow) {
        arrow.src = "./Images/accordion-arrow-up.png";
      }
    });

    if (!wasActive) {
      clickedWrapper.classList.add("active");
      const panels = clickedWrapper.querySelector(".panels");
      const arrow = clickedWrapper.querySelector(".accordion-arrow");
      panels.style.display = "block";
      if (arrow) arrow.src = "./Images/accordion-arrow-down.png";
    }
  });
});
