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

const header = document.querySelector(".header");

const btnUp = document.querySelector(".btn-up");

// document.addEventListener("scroll", () => {
//   if (window.scrollY >= 300) {
//     header.classList.add("header_stick");
//     btnUp.classList.add("btn-up_visible");
//   } else {
//     btnUp.classList.remove("btn-up_visible");
//     header.classList.remove("header_stick");
//   }

//   const rect = timersSection.getBoundingClientRect();

//   if (rect.y <= rect.height * 2.5) {
//     if (startTimers) {
//       setTime(timerPackage, 0, 10, 1, 3560);
//       setTime(timerCountries, 0, 5, 40, 195);
//       setTime(timerCustomer, 0, 5, 15, 445);
//       setTime(timerYear, 0, 1, 15, 99);
//       startTimers = false;
//     }
//   }
// });

// if (window.scrollY >= 300) {
//   header.classList.add("header_stick");
//   btnUp.classList.add("btn-up_visible");
// }
