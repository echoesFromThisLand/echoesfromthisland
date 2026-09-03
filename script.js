document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".site-nav");

  if (menuButton && navigation) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    };

    menuButton.addEventListener("click", () => {
      const willOpen = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", String(willOpen));
      navigation.classList.toggle("is-open", willOpen);
    });

    navigation.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
        menuButton.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 860) closeMenu();
    });
  }

  document.querySelectorAll(".gallery").forEach(createGallery);
});

function createGallery(container) {
  const imageCount = Number.parseInt(container.dataset.count, 10);
  const imagePrefix = container.dataset.prefix;
  const altText = container.dataset.alt || "Exhibition photograph";

  if (!imagePrefix || !Number.isFinite(imageCount) || imageCount < 1) return;

  let currentIndex = 1;
  let pointerStart = null;

  const figure = document.createElement("figure");
  figure.className = "gallery__figure";

  const imageWrap = document.createElement("div");
  imageWrap.className = "gallery__image-wrap";

  const image = document.createElement("img");
  image.className = "gallery__image";
  image.alt = altText;
  image.decoding = "async";

  const caption = document.createElement("figcaption");
  caption.className = "gallery__caption";
  caption.setAttribute("aria-live", "polite");

  const previousButton = galleryButton("Previous image", "‹", "gallery__button--previous");
  const nextButton = galleryButton("Next image", "›", "gallery__button--next");

  image.addEventListener("load", () => image.classList.remove("is-loading"));
  image.addEventListener("error", () => {
    image.classList.remove("is-loading");
    caption.textContent = `Image ${currentIndex} of ${imageCount} is unavailable`;
  });

  function showImage(index) {
    currentIndex = ((index - 1 + imageCount) % imageCount) + 1;
    image.classList.add("is-loading");
    image.src = `${imagePrefix}${String(currentIndex).padStart(2, "0")}.jpg`;
    image.alt = `${altText} ${currentIndex}`;
    caption.textContent = `${currentIndex} / ${imageCount}`;
  }

  previousButton.addEventListener("click", () => showImage(currentIndex - 1));
  nextButton.addEventListener("click", () => showImage(currentIndex + 1));

  container.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showImage(currentIndex - 1);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      showImage(currentIndex + 1);
    }
  });

  container.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "mouse") pointerStart = event.clientX;
  });

  container.addEventListener("pointerup", (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    pointerStart = null;
    if (Math.abs(distance) < 45) return;
    showImage(currentIndex + (distance < 0 ? 1 : -1));
  });

  imageWrap.append(image);
  figure.append(imageWrap, caption);
  container.append(figure, previousButton, nextButton);
  showImage(currentIndex);
}

function galleryButton(label, symbol, modifierClass) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `gallery__button ${modifierClass}`;
  button.setAttribute("aria-label", label);
  button.textContent = symbol;
  return button;
}
