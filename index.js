const wrappers = document.querySelectorAll(".acc-wrapper");

wrappers.forEach(wrapper => {
  wrapper.addEventListener("click", function (e) {
    e.stopPropagation();

    const accordion = wrapper.querySelector(".accordion");
    const panel = wrapper.querySelector(".panel");
    const arrow = wrapper.querySelector(".accordion-arrow");

    wrapper.classList.toggle("active");

    if (panel.style.display === "block") {
      panel.style.display = "none";
      if (arrow) arrow.src = "./Images/accordion-arrow-down.png";
    } else {
      panel.style.display = "block";
      if (arrow) arrow.src = "./Images/accordion-arrow-up.png";
    }
  });
});
