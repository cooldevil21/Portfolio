function cursor() {
    const cursorElement = document.querySelector("#cursor");
    const cursorCircle = cursorElement.querySelector(".cursor__circle");
    const cursorPosition = { x: -100, y: -100 };
    const cursorSmoothPosition = { x: 0, y: 0 };
  
    window.addEventListener("mousemove", (event) => {
      cursorPosition.x = event.clientX;
      cursorPosition.y = event.clientY;
    });
  
    const updateCursor = () => {
      const offsetX = Math.round(cursorPosition.x - cursorSmoothPosition.x);
      const offsetY = Math.round(cursorPosition.y - cursorSmoothPosition.y);
  
      cursorSmoothPosition.x += 0.1 * offsetX;
      cursorSmoothPosition.y += 0.1 * offsetY;
  
      const rotateDeg = (180 * Math.atan2(offsetX, offsetY)) / Math.PI;
      const scaleAmount = Math.min(Math.sqrt(offsetX ** 2 + offsetY ** 2) / 1500, 0.6);
  
      const transformScale = `scale(${1 + scaleAmount}, ${1 - scaleAmount})`;
      const transformRotate = `rotate(${rotateDeg}deg)`;
      const transformTranslate = `translate3d(${cursorSmoothPosition.x}px, ${cursorSmoothPosition.y}px, 0)`;
  
      cursorElement.style.transform = transformTranslate;
      cursorCircle.style.transform = transformRotate + transformScale;
    };
  
    function animateCursor() {
      updateCursor();
      requestAnimationFrame(animateCursor);
    }
  
    animateCursor();
  }
  
  cursor();
  