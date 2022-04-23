/** === Global Variables === */
var navSection = null,
  sticky = null;

  
window.addEventListener("DOMContentLoaded", (event) => {
  initializeVariables();
});

window.onscroll = function () {
  //   stickNavSection();
};


/** === FUNCTIONS === */

function initializeVariables() {
  navSection = document.getElementById("navSection");
  sticky = navSection.offsetTop;
}

// Keep Navigation links on top of page
function stickNavSection() {
  if (window.pageYOffset > sticky) {
    navSection.classList.add("sticky");
  } else {
    navSection.classList.remove("sticky");
  }
}
