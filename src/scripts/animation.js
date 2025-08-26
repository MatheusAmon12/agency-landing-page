document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(SplitText);

  document.fonts.ready.then(() => {
    gsap.set("#headline-content", { opacity: 1 });
    let r = SplitText.create("#headline", { type: "words", aria: "hidden" });
    gsap.from(r.words, {
      opacity: 0,
      duration: 2,
      ease: "sine.out",
      stagger: 0.25,
      repeat: -1,
      yoyo: true,
      onComplete: () => split.revert(),
    });
  });

  gsap.from("#mockup-one-container", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    ease: "circ",
    scrollTrigger: {
      trigger: "#hero-section",
      duration: 1,
      start: "top 300px",
    },
  });

  gsap.from("#project-card-one", {
    x: "-100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: { trigger: "#cta-section", start: "top 400px" },
  });

  gsap.from("#project-card-two", {
    y: "-100vh",
    duration: 1,
    opacity: 0,
    scrollTrigger: { trigger: "#cta-section", start: "top 400px" },
  });

  gsap.from("#project-card-three", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: { trigger: "#cta-section", start: "top 400px" },
  });

  gsap.from("#project-card-four", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: { trigger: "#cta-section", start: "top 400px" },
  });

  gsap.from("#project-card-five", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: { trigger: "#cta-section", start: "top 400px" },
  });

  gsap.from("#project-card-six", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    scrollTrigger: { trigger: "#cta-section", start: "top 400px" },
  });

  gsap.from("#offer-card-one", {
    rotation: -360,
    x: "-100%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#offer-section",
      start: "top 740px",
      end: "bottom 750px",
      scrub: true,
    },
  });

  gsap.from("#offer-card-two", {
    rotation: 360,
    x: "100%",
    opacity: 0,
    scrollTrigger: {
      trigger: "#offer-section",
      start: "top 740px",
      end: "bottom 750px",
      scrub: true,
    },
  });

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

  gsap.from("#our-service-content", {
    x: "-100vw",
    duration: 1,
    opacity: 0,
    ease: "circ",
    scrollTrigger: {
      trigger: "#our-service-section",
      start: "top 400px",
    },
  });

  gsap.from("#mockup-two-container", {
    x: "100vw",
    duration: 1,
    opacity: 0,
    ease: "circ",
    scrollTrigger: { trigger: "#our-service-section", start: "top 400px" },
  });

  gsap.from("#final-cta-content", {
    y: "-50%",
    opacity: 0,
    ease: "circ",
    scrollTrigger: {
      trigger: "#final-cta-section",
      start: "top 600px",
      end: "bottom 900px",
      scrub: true,
    },
  });

  gsap.fromTo(
    ".cta-animate",
    { scale: 0.9 },
    { scale: 1.1, duration: 1, ease: "circ", yoyo: true, repeat: -1 }
  );

  window.addEventListener("beforeunload", () => {
    ScrollTrigger.getAll().forEach((r) => r.kill()),
      gsap.globalTimeLine.clear();
  });
});
