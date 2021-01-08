const modalImage = document.querySelectorAll(".modalImg");
const modal = document.querySelector(".image-modal");
const closeModal = document.querySelector(".image-modal-closeBtn");
const modalWrapper = document.querySelector(".image-modal-swiper-wrapper");
const nextArrow = document.querySelector(".image-modal-next");
const prevArrow = document.querySelector(".image-modal-prev");

document.body.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG" && event.target.className === "modalImg") {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "all";
    document.body.style.overflow = "hidden";
    const src = event.target.src;
    const clickedDiv = document.createElement("div");
    const clickedImg = document.createElement("img");
    clickedImg.className = "clckImg duplicate";
    clickedImg.src = src;
    clickedDiv.className = "swiper-slide image-modal-swiper-slide";
    clickedDiv.appendChild(clickedImg);
    modalWrapper.appendChild(clickedDiv);

    modalImage.forEach((img) => {
      const slideModal = img.src;
      const modalSlideDiv = document.createElement("div");
      const modalSlideImg = document.createElement("img");
      modalSlideImg.className = "clckImg";
      modalSlideImg.src = slideModal;
      modalSlideDiv.className = "swiper-slide image-modal-swiper-slide";
      modalSlideDiv.appendChild(modalSlideImg);
      modalWrapper.appendChild(modalSlideDiv);
      const all = document.querySelectorAll(".clckImg");
      all.forEach((sana) => {
        const duplicate = document.querySelector(".duplicate");
        if (duplicate.src == sana.src) {
          sana.parentElement.style.display = "none";
          duplicate.parentElement.style.display = "block";
        }
      });
    });
    const slideCount = modalWrapper.getElementsByTagName("div").length;
    if (slideCount == 2) {
      nextArrow.className = "swiper-button-hidden";
      prevArrow.className = "swiper-button-hidden";
    }

    closeModal.addEventListener("click", () => {
      modal.style.opacity = "0";
      modal.style.pointerEvents = "none";
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "auto";
      modalWrapper.innerHTML = "";
    });
    var myModalSwiper = new Swiper(".image-modal-swiper-container", {
      speed: 400,
      spaceBetween: 5,
      slidesPerView: 1,
      watchOverflow: true,
      noSwiping: false,

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});
