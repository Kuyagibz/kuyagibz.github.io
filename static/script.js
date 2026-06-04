
function goToGumroad(){
   window.open("https://kuyagibz.gumroad.com","_blank");
}

function goToYoutube(){
   window.open("https://www.youtube.com/@KuyagibzMeshDepot","_blank");
}

function goToInstagram(){
   window.open("https://www.instagram.com/kuyagibz");
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

