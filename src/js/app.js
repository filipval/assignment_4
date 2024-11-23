const componentTitleButtons = document.querySelectorAll(".component__title");
const componentContent = document.querySelectorAll(".component__content");
const componentTitlesContainer = document.querySelector(
  ".component__titles--container"
);
const toggleMenuButton = document.querySelector(".menu__toggle-button");

// Toggle menu open/close
toggleMenuButton.addEventListener("click", () => {
  // Add/remove active class to show/hide the menu
  componentTitlesContainer.classList.toggle(
    "component__titles--container--active"
  );
});

// If the click is outside the menu or toggle button, close the menu
document.addEventListener("click", (event) => {
  if (
    !componentTitlesContainer.contains(event.target) &&
    !toggleMenuButton.contains(event.target)
  ) {
    componentTitlesContainer.classList.remove(
      "component__titles--container--active"
    );
  }
});

// Add event listeners to each title button for tab navigation
componentTitleButtons.forEach((titleButton, index) => {
  titleButton.addEventListener("click", () => {
    // Remove active class from all buttons and content
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

  // Check if modal elements exist before adding event listeners
  if (openModalButton && closeModalButton && modal) {
    openModalButton.addEventListener("click", () => {
      // Show modal when open button is clicked
      modal.style.display = "flex";
    });

    closeModalButton.addEventListener("click", () => {
      // Hide modal when Close button is clicked
      modal.style.display = "none";
    });

    okButton.addEventListener("click", () => {
      // Hide modal when OK button is clicked
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
      // Toggle dropdown visibility
      button.classList.toggle("active");
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    items.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();

        // Update button text with selected item and keep arrow icon
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
      // Show toast with visible class and hide after 3 seconds
      toast.classList.remove("hidden");
      toast.classList.add("visible");

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

// Toggle accordion sections on title click
titleContainers.forEach((title, index) => {
  title.addEventListener("click", () => {
    // Toggle active class on the content and rotate the arrow
    descriptionContainers[index].classList.toggle(
      "accordion__content--container-active"
    );
    accordionToggleLogos[index].classList.toggle("rotate-arrow");
    title.classList.toggle("accordion__title--container-active");
  });
});
