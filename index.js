
function toggleFunction() {
    var x = document.getElementById("topnav");
    if (x.className === "nav-container") {
        x.className += " responsive";
    } else {
        x.className = "nav-container";
    }
}

function checkOrientation() {
    var x = document.getElementById("topnav");
    if (window.matchMedia("(orientation: landscape)").matches) {
        // Change the class name to "landscape" when in landscape orientation

        if (x.className === "nav-container responsive") {
            x.className = "nav-container"
        }


    } else {}
}

checkOrientation();

// Listen for the window resize event to detect orientation changes
window.addEventListener('resize', checkOrientation);



// Gallery section
const filterContainer = document.querySelector(".gallery-filter"),
galleryItems = document.querySelectorAll(".gallery-item");

filterContainer.addEventListener("click", (event) =>{
  if(event.target.classList.contains("filter-item")){
       // deactivate existing active 'filter-item'
       filterContainer.querySelector(".active").classList.remove("active");
       // activate new 'filter-item'
       event.target.classList.add("active");
       const filterValue = event.target.getAttribute("data-filter");
       galleryItems.forEach((item) =>{
      if(item.classList.contains(filterValue) || filterValue === 'all'){
          item.classList.remove("hide");
           item.classList.add("show");
      }
      else{
          item.classList.remove("show");
          item.classList.add("hide");
      }
       });
  }
});


// gallery lightbox
function openLightbox(event, element) {
 event.preventDefault();
 document.body.classList.add('lightbox-open');
 var lightbox = document.getElementById('lightbox');
 var lightboxImg = document.getElementById('lightbox-img');

 lightboxImg.src = element.href;
 lightbox.style.display = 'flex';
}

function closeLightbox() {
 document.body.classList.remove('lightbox-open');
 document.getElementById('lightbox').style.display = 'none';
}
















var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
      },
  });

var swiper = new Swiper(".project-swiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
  });


  // const cardContainer = document.getElementById('project-wrapper');
  // cardContainer.addEventListener('mouseenter', function(event) {

  //   if (event.target.classList.contains('project')) {
  //       // Add the 'custom-class' class to the .card-content element of the hovered card
  //       const cardContent = event.target.querySelector('.swiper');
  //       cardContent.classList.add(' .project-swiper');
  //     }
  // });

  // cardContainer.addEventListener('mouseleave', function(event) {

  //   if (event.target.classList.contains('project')) {
  //       // Remove the 'custom-class' class from the .card-content element of the hovered card
  //       const cardContent = event.target.querySelector('.swiper');
  //       cardContent.classList.remove(' .project-swiper');
  //     }
  // });

  document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    sendEmail();
});


  function sendEmail() {


    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let finalmessage = `Name : ${name} <br> Phone no : ${phone} <br>  Email : ${email} <br> Subject : ${subject} <br>  Message : ${message} <br>`;
   
    // 7acc0f74-e899-4f9f-8b8f-ff384167d98b

    // SecureToken : "42F7B7F1F4BF759FA3F6CA28B1909617F290",
    Email.send({
      SecureToken : "7acc0f74-e899-4f9f-8b8f-ff384167d98b",
      // Host : "smtp.elasticemail.com",
      // Username : "vishwasjs2806@gmail.com",
      // Password : "42F7B7F1F4BF759FA3F6CA28B1909617F290",
      To : 'vishurao2001@gmail.com',
      From : "vishwasjs2806@gmail.com",
      Subject : "This is the subject",
      Body : finalmessage
  }).then(
    message => alert(message)
  );
}