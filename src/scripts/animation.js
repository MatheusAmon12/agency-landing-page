document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // project cards
  gsap.from("#project-card-one", {
    x: "-100vw",
    duration: 1,
    opacity: 0,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cta-section",
      start: "top 400px",
    },
  });

  gsap.from("#project-card-two", {
    y: "-100vh",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cta-section",
      start: "top 400px",
    },
  });

  gsap.from("#project-card-three", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cta-section",
      start: "top 400px",
    },
  });

  gsap.from("#project-card-four", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cta-section",
      start: "top 400px",
    },
  });

  gsap.from("#project-card-five", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cta-section",
      start: "top 400px",
    },
  });

  gsap.from("#project-card-six", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#cta-section",
      start: "top 400px",
    },
  });

});
