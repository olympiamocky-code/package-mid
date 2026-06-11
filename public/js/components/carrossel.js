const slides = document.querySelector(".slides");

if (slides) {
  const polaroids = Array.from(slides.children);

  polaroids.forEach((polaroid) => {
    const clone = polaroid.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    slides.appendChild(clone);
  });

  slides.classList.add("is-ready");
}
