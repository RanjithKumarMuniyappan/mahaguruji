function loadHTML(selector, filePath, callback) {
  fetch(filePath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load ${filePath}`);
      }
      return response.text();
    })
    .then(html => {
      document.querySelector(selector).innerHTML = html;
      if (callback) callback();
    })
    .catch(error => {
      console.error(error);
    });
}

// Function to handle click events for the mobile menu
function attachHeaderListeners() {
  const navIcon = document.getElementById("nav-icon4");
  const mobileNav = document.getElementById("mobile-nav");
  const closeIcon = document.getElementById("res-cross");

  if (navIcon) {
    navIcon.addEventListener("click", function () {
      mobileNav.style.left = "0";
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener("click", function () {
      mobileNav.style.left = "-100%";
    });
  }
}

// Function to highlight the current menu item
function updateMenuStatus() {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".nav-bar ul li a");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav ul li a");

  const setActiveLink = (links) => {
    links.forEach(link => {
      // Check if the link's href is the same as the current URL
      if (link.href === currentUrl) {
        link.classList.add("activated"); // Make sure you have a .activated CSS class
      }
    });
  };

  setActiveLink(navLinks);
  setActiveLink(mobileNavLinks);
}

// Main execution block
document.addEventListener("DOMContentLoaded", function () {
  loadHTML("#header", "components/header.html", () => {
    // Now both functions are defined before being called
    attachHeaderListeners();
    updateMenuStatus();
    listHeader() 
  });
  loadHTML("#footer", "components/footer.html");
});




function listHeader(){
  var new_scroll_position = 0;

        var last_scroll_position;

        var header = document.getElementById("stickyHeader");



        window.addEventListener('scroll', function(e) {

        last_scroll_position = window.scrollY;



        // Scrolling down

        if (new_scroll_position < last_scroll_position && last_scroll_position > 100) {

          // header.removeClass('slideDown').addClass('slideUp');

          header.classList.remove("slideDown");

          header.classList.add("slideUp");



        // Scroll top

        } 

        else if (last_scroll_position < 100) {

          header.classList.remove("slideDown");

        } 

        else if (new_scroll_position > last_scroll_position) {

          header.classList.remove("slideUp");

          header.classList.add("slideDown");

        }



          new_scroll_position = last_scroll_position;

        });


        // Responsive header menu

        $('.mobile-nav .menu-item-has-children').on('click', function() {

          $(this).toggleClass('active');

        }); 



        $('#nav-icon4').click(function(){

            $(this).toggleClass('open');

            $('#mobile-nav').toggleClass('open');

        });



        $('#res-cross').click(function(){

            $('#mobile-nav').removeClass('open');

            $('#nav-icon4').removeClass('open')

        });
}