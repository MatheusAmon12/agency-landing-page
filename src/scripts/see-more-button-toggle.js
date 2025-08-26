const handleSeeMoreButtonClick = (event) => {
  const detailsList = event.target.nextElementSibling;
  const chevronIcon = event.target.firstElementChild;

  detailsList.classList.toggle("hidden");
  chevronIcon.classList.toggle("rotate-180");
};

document.addEventListener("DOMContentLoaded", () => {
  const seeMoreButton = document.querySelectorAll(".see-more-button");

  seeMoreButton.forEach((button) =>
    button.addEventListener("click", handleSeeMoreButtonClick)
  );

  window.addEventListener("beforeunload", () =>
    seeMoreButton.forEach((button) =>
      button.removeEventListener("click", handleSeeMoreButtonClick)
    )
  );
});
