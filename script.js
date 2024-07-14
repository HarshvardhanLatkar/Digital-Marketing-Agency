document.getElementById("hButton").addEventListener("click", function () {
  document.getElementById("contactFormContainer").classList.remove("hidden");
});

document.getElementById("closeFormBtn").addEventListener("click", function () {
  document.getElementById("contactFormContainer").classList.add("hidden");
});

//--------------------------------------------------

const dots = document.querySelectorAll(".dot-container i");
let currentIndex = 0;

function activateDot() {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
  currentIndex = (currentIndex + 1) % dots.length;
}

setInterval(activateDot, 1000);
//------------------------------------------------------

function initializeAutoTransition() {
  const aboutPhotos = document.querySelectorAll(".about-photos");
  let currentIndex = 0;

  applyTransition();

  setInterval(() => {
    currentIndex = (currentIndex + 1) % aboutPhotos.length;
    applyTransition();
  }, 2000);

  function applyTransition() {
    aboutPhotos.forEach((photo) => {
      photo.style.backgroundColor = "#fff";
      photo.style.color = "#000";
    });

    const currentPhoto = aboutPhotos[currentIndex];
    const dataImg = currentPhoto.getAttribute("data-img");

    currentPhoto.style.backgroundColor = "#ff3147";
    currentPhoto.style.color = "#fff";

    document.getElementById("mainImage").src = dataImg;
  }
}

initializeAutoTransition();

function changeImage(imageSrc) {
  document.getElementById("mainImage").src = imageSrc;

  const aboutPhotos = document.querySelectorAll(".about-photos");
  aboutPhotos.forEach((photo) => {
    photo.style.backgroundColor = "#fff";
    photo.style.color = "#000";
  });

  const clickedPhoto = document.querySelector(
    `.about-photos[data-img="${imageSrc}"]`
  );
  clickedPhoto.style.backgroundColor = "#ff3147";
  clickedPhoto.style.color = "#fff";
}
