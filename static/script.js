
function goToHome(){
  window.open("index.html", "_self");
}

function goToGumroad(){
   window.open("https://kuyagibz.gumroad.com","_blank");
}

function goToYoutube(){
   window.open("https://www.youtube.com/@KuyagibzMeshDepot","_blank");
}

function goToInstagram(){
   window.open("https://www.instagram.com/kuyagibz");
}

function goToPaypalSupport(){

  window.open("https://paypal.me/kuyagibz02");
}


function goToProject(){
  window.location("project.html");
}

function goToKuyaRhamzYt(){
  window.open("https://www.youtube.com/@KuyagibzMeshDepot");
}


function goToVrChatProfile(){
  window.open("https://vrchat.com/home/user/usr_fb72fc09-65aa-443b-93c8-d94bbdc851bb");
}

/**SHOW SECTION FUNCTION**/

function showSection(sectionId) {
  const sections = document.querySelectorAll('.content, .about,.project');

  sections.forEach(sec => {
    if (sec.id === sectionId) {
      sec.classList.remove('hidden');
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
      sec.classList.add('hidden');
    }
  });
}

/***CAROUSEL FUNCTION***/

let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-item");
const track = document.querySelector(".carousel-track");
const dots = document.querySelectorAll(".dot");

let startX = 0;
let isDragging = false;

function showSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  // update dots
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

function goToSlide(n) {
  showSlide(n);
}

// Auto-slide every 4 seconds
setInterval(() => {
  moveSlide(1);
}, 4000);

// Drag events
track.addEventListener("mousedown", (e) => {
  startX = e.pageX;
  isDragging = true;
});

track.addEventListener("mouseup", (e) => {
  if (!isDragging) return;
  let endX = e.pageX;
  if (endX < startX - 50) moveSlide(1);   // swipe left
  if (endX > startX + 50) moveSlide(-1);  // swipe right
  isDragging = false;
});

track.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

track.addEventListener("touchend", (e) => {
  if (!isDragging) return;
  let endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) moveSlide(1);   // swipe left
  if (endX > startX + 50) moveSlide(-1);  // swipe right
  isDragging = false;
});

// Initialize
showSlide(currentSlide);


function toggleMenu() {
  const drawer = document.getElementById("drawerMenu");
  drawer.classList.toggle("open");
}

