var router = new PJaxRouter({
    container: document.querySelector(".pjax-container"),
    cancelNavigationClass: "out",
    cacheLinks: ".important-pages",
    cacheNavigatedPages: true,
    cacheLength: 30,
    onStart: {
        value: function (e, r) {
            leaveAnimation();
        }
    },
    onLeaving: {
        duration: 1250,
        value: function (e, r) {}
    },
    onWaiting: {
        value: function (e, r) {}
    },
    onError: {
        value: function (e, r) {}
    },
    onReady: {
        value: function (e, r) {
            SmoothScroll();
            enterAnimation();
            Cursor();

            if ("works.html" == r) {
                console.log("works page is loaded");
                gsap.to(".works", { skewX: -10, color: "#519259" });
                gsap.to(".kshitij", { skewX: 0, color: "black" });

                let e = document.querySelector(".i1");
                let r = document.querySelector(".i2");

                e.addEventListener("click", () => {
                    window.open("https://cooldevil21.github.io/Qlimate/", "_blank");
                });

            } else if ("index.html" == r) {
                console.log("index page is loaded");
                gsap.to(".kshitij", { skewX: -10, color: "#519259" });
                gsap.to(".works", { skewX: 0, color: "black" });
            }
        }
    }
});

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

function Interact() {
    let e = document.querySelector(".kshitij");
    let r = document.querySelector(".works");
    let c = document.querySelector(".contact");
    let t = document.querySelector(".github");
    let o = document.querySelector(".linkedin");
    let u = document.querySelector(".dribbble");

    e.addEventListener("mouseover", () => {
        document.querySelector(".cursor__circle").style.width = "4vw";
        document.querySelector(".cursor__circle").style.height = "4vw";
        document.querySelector(".cursor__circle").style.background = "#519259";
        document.querySelector(".cursor__circle").style.opacity = 0.1;
        document.querySelector("#cursor").style.margin = "-2vw";
    });

    // ... (similar event listeners for other elements)

    t.addEventListener("click", () => {
        window.open("https://github.com/cooldevil21", "_blank");
    });

    o.addEventListener("click", () => {
        window.open("https://www.linkedin.com/in/vikrant-singh-b28834244/", "_blank");
    });
}

function preventBack() {
    window.history.forward();
}

window.addEventListener("load", () => {
    gsap.to(document.body, 1.5, { opacity: 1 });
});

Interact();
setTimeout("preventBack()", 0);
window.onunload = function () {};
