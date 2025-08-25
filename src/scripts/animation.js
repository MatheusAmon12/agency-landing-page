document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // hero
  gsap.from("#mockup-one-container", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    ease: "circ",
    scrollTrigger: {
      trigger: "#hero-section",
      duration: 1,
      start: "top 100px",
    },
  });

  // project cards
  gsap.from("#project-card-one", {
    x: "-100vw",
    duration: 1,
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

  // offer cards
  gsap.from("#offer-card-one", {
    rotation: -360,
    x: "-100%",
    scrollTrigger: {
      trigger: "#offer-section",
      start: "top 700px",
      end: "bottom 750px",
      scrub: true,
    },
  });

  gsap.from("#offer-card-two", {
    rotation: 360,
    x: "100%",
    scrollTrigger: {
      trigger: "#offer-section",
      start: "top 700px",
      end: "bottom 750px",
      scrub: true,
    },
  });

  // benefits cards
  gsap.from("#benefit-one", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#benefits-section",
      start: "top 500px",
      end: "bottom 400px",
      scrub: true,
    },
  });

  gsap.from("#benefit-two", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#benefits-section",
      start: "top 500px",
      end: "bottom 400px",
      scrub: true,
    },
  });

  gsap.from("#benefit-three", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#benefits-section",
      start: "top 500px",
      end: "bottom 400px",
      scrub: true,
    },
  });

  gsap.from("#benefit-four", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#benefits-section",
      start: "top 500px",
      end: "bottom 400px",
      scrub: true,
    },
  });

  gsap.from("#benefit-five", {
    opacity: 0,
    scrollTrigger: {
      trigger: "#benefits-section",
      start: "top 500px",
      end: "bottom 400px",
      scrub: true,
    },
  });

  // about our service
  gsap.from("#our-service-content", {
    x: "-100vw",
    duration: 1,
    opacity: 0,
    ease: "circ",
    scrollTrigger: {
      trigger: "#our-service-section",
      start: "top 100px",
    },
  });

  gsap.from("#mockup-two-container", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    ease: "circ",
    scrollTrigger: {
      trigger: "#our-service-section",
      start: "top 100px",
    },
  });

  // final cta
  gsap.from("#final-cta-content", {
    y: "100vh",
    opacity: 0,
    ease: "circ",
    scrollTrigger: {
      trigger: "#final-cta-section",
      start: "top 100px",
      end: "bottom 600px",
      markers: true,
      scrub: true,
    },
  });
});
