const switchers = document.querySelectorAll(".our-work ul li");
const switchersImgs = document.querySelectorAll(".our-work .gallery .box");

switchers.forEach((li) => {
  li.addEventListener("click", (e) => {
    switchers.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");
    e.currentTarget.classList.add("rounded-pill");

    switchersImgs.forEach((img) => (img.parentElement.style.display = "none"));

    if (e.currentTarget.dataset.cat === "all") {
      switchersImgs.forEach((img) => (img.parentElement.style.display = "block"));
    } else {
      document
        .querySelectorAll(
          `.our-work .gallery .box[data-work='${e.currentTarget.dataset.cat}']`
        )
        .forEach((img) => (img.parentElement.style.display = "block"));
    }
  });
});
