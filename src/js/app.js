const componentTitleButtons = document.querySelectorAll(".component__title");
const componentContent = document.querySelectorAll(".component__content");

// Event Listeners
componentTitleButtons.forEach((titleButton, index) => {
  titleButton.addEventListener("click", () => {
    componentTitleButtons.forEach((button) =>
      button.classList.remove("component__title--active")
    );
    componentContent.forEach((content) =>
      content.classList.remove("component__content--active")
    );
    titleButton.classList.add("component__title--active");
    componentContent[index].classList.add("component__content--active");
  });
});

// Dropdown
document
  .querySelectorAll(".component__dropdown--example")
  .forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown__button");
    const menu = dropdown.querySelector(".dropdown");
    const items = dropdown.querySelectorAll(".dropdown__item");

    button.addEventListener("click", () => {
      button.classList.toggle("active");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        const arrow = button.querySelector(".dropdown__arrow");
        button.innerHTML = `${item.textContent} <i class="${arrow.className}"></i>`;
      });
    });
  });

// Accordions
const titleContainers = document.querySelectorAll(
  ".accordion__title--container"
);

const descriptionContainers = document.querySelectorAll(
  ".accordion__content--container"
);

const accordionToggleLogos = document.querySelectorAll(
  ".accordion__toggle-arrow"
);

titleContainers.forEach((title, index) => {
  title.addEventListener("click", () => {
    descriptionContainers[index].classList.toggle(
      "accordion__content--container-active"
    );

    accordionToggleLogos[index].classList.toggle("rotate-arrow");
    title.classList.toggle("accordion__title--container-active");
  });
});
