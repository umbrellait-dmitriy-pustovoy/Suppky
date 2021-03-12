document.addEventListener("DOMContentLoaded", () => {
  let orderGallery = new VanillaGallery({
    elem: "order-gallery",
  });
  console.log("orderGallery", orderGallery);
});

let VanillaGallery = function (options) {
  let rootSelector = `[data-gallery="${options.elem}"]`;
  let fullImageSelector = `[data-gallery="full"]`;
  let previewSelector = `[data-gallery="preview"]`;
  let rootElem = document.querySelector(`[data-gallery='${options.elem}']`);

  if (!rootElem) throw new Error("gallery: rootElem not nound");
  console.log("rootElem:", rootElem);

  let fullImageElem = document.querySelector(rootSelector + " > " + fullImageSelector + " img");
  let previewElems = document.querySelectorAll(rootSelector + " > " + previewSelector + " img");

  function removeAllActive() {
    previewElems.forEach((el) => el.classList.remove("active"));
  }

  if (previewElems[0]) {
    previewElems[0].classList.add("active");
  }

  previewElems.forEach((item) =>
    item.addEventListener("click", (previewEl) => {
      let srcAttr = previewEl.target.getAttribute("src");
      console.log("srcAttr:", srcAttr);
      if (previewEl.target.classList.contains("active")) {
        return;
      }

      fullImageElem.setAttribute("src", srcAttr);
      removeAllActive();
      previewEl.target.classList.add("active");
    })
  );

  console.log("fullImageElem:", fullImageElem);
};

window.onscroll = function () {
  scrollFunction();
};

const header = document.querySelector(".header__padding");

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("arrowUp").style.display = "block";
    document.addEventListener("scroll", () => {
      header.classList.add("header_stick");
    });
  } else {
    document.getElementById("arrowUp").style.display = "none";
    header.classList.remove("header_stick");
  }
}

// const nav = document.querySelector(".burger");
// const overlay = document.querySelector(".overlay");
// const burger = document.querySelector(".header__burger");
// const menuCloseBtn = document.querySelector(".burger__close-btn");
// const listMobileItem = Array.from(document.querySelectorAll(".burger__item"));

// burger.addEventListener("click", () => {
//   overlay.classList.add("overlay_show");
//   nav.classList.add("burger_show");
//   menuCloseBtn.classList.add("burger__close-btn_rotate");
// });

// overlay.addEventListener("click", (e) => {
//   overlay.classList.remove("overlay_show");
//   nav.classList.remove("burger_show");
//   menuCloseBtn.classList.remove("burger__close-btn_rotate");
// });

// menuCloseBtn.addEventListener("click", (e) => {
//   overlay.classList.remove("overlay_show");
//   nav.classList.remove("burger_show");
//   menuCloseBtn.classList.remove("burger__close-btn_rotate");
// });

// listMobileItem.forEach((item) => {
//   const btn = item.querySelector(".burger__drop-btn");
//   const subMenu = item.querySelector(".burger__sub-list");
//   if (btn) {
//     btn.addEventListener("click", () => {
//       subMenu.classList.toggle("burger__sub-list_show");
//       btn.classList.toggle("burger__drop-btn_rotate");
//     });
//   }
// });

(function () {
  var hamburger = {
    navToggle: document.querySelector(".nav-toggle"),
    nav: document.querySelector("nav"),

    doToggle: function (e) {
      e.preventDefault();
      this.navToggle.classList.toggle("expanded");
      this.nav.classList.toggle("expanded");
    },
  };

  hamburger.navToggle.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
  hamburger.nav.addEventListener("click", function (e) {
    hamburger.doToggle(e);
  });
})();
