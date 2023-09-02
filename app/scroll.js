function smoothScroll() {
    const body = document.body;
    const scrollContainer = document.querySelector("[data-scroll]");
    const scrollContainerHeight = scrollContainer.getBoundingClientRect().height - 1;
    let scrollOffset = 0;
  
    body.style.height = Math.floor(scrollContainerHeight) + "px";
  
    function scroll() {
      scrollOffset += 0.08 * (window.pageYOffset - scrollOffset);
      const transformValue = "translateY(-" + scrollOffset + "px) translateZ(0)";
      scrollContainer.style.transform = transformValue;
      window.requestAnimationFrame(scroll);
  
      body.style.width = "100%";
      scrollContainer.style.overflow = "hidden";
      scrollContainer.style.zIndex = 2;
      scrollContainer.style.position = "fixed";
      scrollContainer.style.top = scrollContainer.style.left = 0;
      scrollContainer.style.width = "100%";
    }
  
    scroll();
  }
  
  smoothScroll();
  