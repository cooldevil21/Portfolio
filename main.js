// Initialize PJaxRouter
const router = new PJaxRouter({
    container: document.querySelector(".pjax-container"),
    cancelNavigationClass: "out",
    cacheLinks: ".important-pages",
    cacheNavigatedPages: true,
    cacheLength: 30,
    onStart: { value: leaveAnimation },
    onLeaving: { duration: 1250, value: () => {} },
    onWaiting: { value: () => {} },
    onError: { value: () => {} },
    onReady: { value: handlePageLoad },
  });
  
  // Animation functions
  function leaveAnimation() {
    gsap.to(".curtain_1", 1.2, { width: "100%", ease: "power4.inOut" });
    gsap.to(".curtain_2", 1.2, { width: "100%", ease: "power4.inOut", delay: 0.1 });
    gsap.to(".curtain_3", 1.2, { width: "100%", ease: "power4.inOut", delay: 0.2 });
  }
  
  function enterAnimation() {
    gsap.to(".curtain_1", 1.2, { width: "0%", ease: "power4.inOut", delay: 1 });
    gsap.to(".curtain_2", 1.2, { width: "0%", ease: "power4.inOut", delay: 1.1 });
    gsap.to(".curtain_3", 1.2, { width: "0%", ease: "power4.inOut", delay: 1.2 });
  }
  
  // Handle page load
  function handlePageLoad(e, r) {
    SmoothScroll();
    enterAnimation();
    Cursor();
  
    if (r === "works.html") {
      console.log("works page is loaded");
      gsap.to(".works", { skewX: -10, color: "#519259" });
      gsap.to(".kshitij", { skewX: 0, color: "black" });
  
      const i1 = document.querySelector(".i1");
  
      i1.addEventListener("click", () => {
        window.open("https://cooldevil21.github.io/Qlimate/", "_blank");
      });
  
    } else if (r === "index.html") {
      console.log("index page is loaded");
      gsap.to(".kshitij", { skewX: -10, color: "#519259" });
      gsap.to(".works", { skewX: 0, color: "black" });
    }
  }
  
  // Interaction handling
  function handleInteraction(event, cursorStyle) {
    document.querySelector(".cursor__circle").style.width = "4vw";
    document.querySelector(".cursor__circle").style.height = "4vw";
    document.querySelector(".cursor__circle").style.background = "#519259";
    document.querySelector(".cursor__circle").style.opacity = 0.1;
    document.querySelector("#cursor").style.margin = "-2vw";
    event.target.style.cursor = cursorStyle;
  }
  
  function handleMouseOver(event) {
    handleInteraction(event, "pointer");
  }
  
  function handleMouseOut(event) {
    document.querySelector(".cursor__circle").style.width = "1vw";
    document.querySelector(".cursor__circle").style.height = "1vw";
    document.querySelector(".cursor__circle").style.background = "black";
    document.querySelector(".cursor__circle").style.border = "none";
    document.querySelector(".cursor__circle").style.opacity = 1;
    document.querySelector("#cursor").style.margin = "-.7vw";
    event.target.style.cursor = "default";
  }
  
  // Add event listeners for interactive elements
  function addInteractiveListeners() {
    const kshitij = document.querySelector(".kshitij");
    const works = document.querySelector(".works");
    const contact = document.querySelector(".contact");
    const github = document.querySelector(".github");
    const linkedin = document.querySelector(".linkedin");
  
    kshitij.addEventListener("mouseover", handleMouseOver);
    kshitij.addEventListener("mouseout", handleMouseOut);
  
    works.addEventListener("mouseover", handleMouseOver);
    works.addEventListener("mouseout", handleMouseOut);
  
    contact.addEventListener("mouseover", handleMouseOver);
    contact.addEventListener("mouseout", handleMouseOut);
  
    github.addEventListener("mouseover", () => handleInteraction(github, "pointer"));
    linkedin.addEventListener("mouseover", () => handleInteraction(linkedin, "pointer"));
  
    github.addEventListener("mouseout", handleMouseOut);
    linkedin.addEventListener("mouseout", handleMouseOut);
  
    github.addEventListener("click", () => {
      window.open("https://github.com/cooldevil21", "_blank");
    });
  
    linkedin.addEventListener("click", () => {
      window.open("https://www.linkedin.com/in/vikrant-singh-b28834244/", "_blank");
    });
  }
  
  // Prevent back navigation
  function preventBack() {
    window.history.forward();
  }
  
  // Page load event
  window.addEventListener("load", () => {
    gsap.to(document.body, 1.5, { opacity: 1 });
    addInteractiveListeners();
    setTimeout(preventBack, 0);
  });
  
  window.onunload = function () {};
  
