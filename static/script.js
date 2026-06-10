
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



function showSection(sectionId) {
  const sections = document.querySelectorAll('.content, .about');

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

