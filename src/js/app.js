const componentTitleButtons = document.querySelectorAll(".component__title");
const componentContent = document.querySelectorAll(".component__content");

// Event Listeners
componentTitleButtons.forEach((titleButton, index) => {
  titleButton.addEventListener("click", () => {
    // Remove active class from all buttons
    componentTitleButtons.forEach((button) =>
      button.classList.remove("component__title--active")
    );

    // Remove active class from all content elements
    componentContent.forEach((content) =>
      content.classList.remove("component__content--active")
    );

    // Add active class to the clicked button
    titleButton.classList.add("component__title--active");

    // Add active class to the corresponding content
    componentContent[index].classList.add("component__content--active");
  });
});
