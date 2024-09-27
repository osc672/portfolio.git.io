$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
 // slide-up script
 $('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});

$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});
// typing text animation script
var typed = new Typed(".typing", {
    strings: ["Fresher", "Hardworker",],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
 // owl carousel script
 $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
    });
});

function togglePublicationDetail(button, detailType) {
    const pubCard = button.closest('.pub-card');
    const detailItem = pubCard.querySelector(`.pub-${detailType}`);
    const isVisible = detailItem.style.display === "block";

    // Hide all detail items of this pub-card
    pubCard.querySelectorAll('.detail-item').forEach(item => {
        item.style.display = "none";
    });

    // Toggle the specific detail
    detailItem.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? `Show ${capitalizeFirstLetter(detailType)}` : `Hide ${capitalizeFirstLetter(detailType)}`;
}

function toggleAllDetails(button) {
    const pubCard = button.closest('.pub-card');
    const isVisible = pubCard.querySelector('.detail-item').style.display === "block";

    // Toggle visibility of all details
    pubCard.querySelectorAll('.detail-item').forEach(item => {
        item.style.display = isVisible ? "none" : "block";
    });

    // Update the button text
    button.textContent = isVisible ? "Show All" : "Hide All";
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


// Function to toggle the details in education section
// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}


// Function to toggle the details in certifications section
function toggleCertDetails(certId) {
    const details = document.getElementById(certId);
    if (details.style.display === "block") {
        details.style.display = "none";
    } else {
        details.style.display = "block";
    }
}

// Function to initialize the display of elements
function initialize() {
    const certDetails = document.querySelectorAll('.cert-details');
    certDetails.forEach(detail => {
        detail.style.display = 'none'; // Hide details by default
    });

    const projectDetails = document.querySelectorAll('.details');
    projectDetails.forEach(detail => {
        detail.style.display = 'none'; // Hide project details by default
    });
}

// Initialize on document load
document.addEventListener('DOMContentLoaded', initialize);

function openOSCBot() {
    window.open('https://t.me/OSCVLK_BOT', '_blank');
}

function openVQABot() {
    window.open('https://t.me/visuval_question_answering_bot', '_blank');
}


function toggleSkillDetails(skillId) {
    const skillDetails = document.getElementById(skillId);
    const isVisible = skillDetails.style.display === "block";

    // Hide all skill-details
    document.querySelectorAll('.skill-details').forEach(detail => {
        detail.style.display = "none";
    });

    // Toggle the clicked skill-details
    skillDetails.style.display = isVisible ? "none" : "block";
}
