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
