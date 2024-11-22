// Tabs: Component Titles and Content
const componentTitleButtons = document.querySelectorAll(".component__title");
const componentContent = document.querySelectorAll(".component__content");

componentTitleButtons.forEach((titleButton, index) => {
  titleButton.addEventListener("click", () => {
    // Remove active classes from all buttons and content
    componentTitleButtons.forEach((button) =>
      button.classList.remove("component__title--active")
    );
    componentContent.forEach((content) =>
      content.classList.remove("component__content--active")
    );

    // Add active class to clicked button and corresponding content
    titleButton.classList.add("component__title--active");
    componentContent[index].classList.add("component__content--active");
  });
});

// Modal Functionality
document.addEventListener("DOMContentLoaded", () => {
  const openModalButton = document.getElementById("openModal");
  const closeModalButton = document.getElementById("closeModal");
  const okButton = document.getElementById("okButton");
  const modal = document.getElementById("modal");

  if (openModalButton && closeModalButton && modal) {
    openModalButton.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", () => {
      modal.style.display = "none";
    });

    okButton.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});

// Dropdown Functionality
document
  .querySelectorAll(".component__dropdown--example")
  .forEach((dropdown) => {
    const button = dropdown.querySelector(".dropdown__button");
    const menu = dropdown.querySelector(".dropdown");
    const items = dropdown.querySelectorAll(".dropdown__item");

    button.addEventListener("click", () => {
      // Toggle dropdown menu visibility
      button.classList.toggle("active");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        // Update button text and retain arrow icon
        const arrow = button.querySelector(".dropdown__arrow");
        button.innerHTML = `${item.textContent} <i class="${arrow.className}"></i>`;
      });
    });
  });

// Toast Functionality
document.addEventListener("DOMContentLoaded", () => {
  const showToastButton = document.querySelector(".toast__button");
  const toast = document.getElementById("toast");

  if (showToastButton && toast) {
    showToastButton.addEventListener("click", () => {
      // Show toast
      toast.classList.remove("hidden");
      toast.classList.add("visible");

      // Hide toast after 3 seconds
      setTimeout(() => {
        toast.classList.remove("visible");
        toast.classList.add("hidden");
      }, 3000);
    });
  }
});

// Accordion Functionality
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
    // Toggle active state for accordion content and arrow icon
    descriptionContainers[index].classList.toggle(
      "accordion__content--container-active"
    );
    accordionToggleLogos[index].classList.toggle("rotate-arrow");
    title.classList.toggle("accordion__title--container-active");
  });
});
