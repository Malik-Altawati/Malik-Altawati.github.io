/*!
    * Start Bootstrap - Freelancer v6.0.3 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
    */
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict

$("#player").on("click", function () {
  location.replace("https://drive.google.com/file/d/1Cm6iX0LsB8sVLOpyWjJGAR13BBJ6v7dL/view?usp=sharing")

})

$("#food").on("click", function () {
  location.replace("https://drive.google.com/file/d/1qiwD8dinwF5DL1gYgtoUAtokTHXfqIzi/view?usp=sharing")
})



function send(e) {

  e.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val()
  var number = $("#phone").val()
  var message = $("#message").val()


  var data = {
    service_id: "gmail",
    template_id: "template_f6wqJaPx",
    user_id: "user_0crLO2gJ3psVgf8pHtZe2",
    template_params: {
      from_name: name,
      from_email: email,
      phoneNumber: number,
      message_html: message,
    },
  };


  $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
    type: "POST",
    data: JSON.stringify(data),
    contentType: "application/json",
  })
    .done(function () {
      swal
        .fire({
          icon: "success",
          title: "Received",
          showConfirmButton: false,
          timer: 1500,
        })
    })
    .fail(function (error) {
      console.log("err: ", error)
      swal.fire({
        icon: "error",
        title: "Oops!!",
        text: "something went wrong, please try again.",
        timer: 3000,
        showConfirmButton: false,
      });
    });


  /// reset
  $("#name").val("");
  $("#email").val("")
  $("#phone").val("")
  $("#message").val("")

  // emailjs.sendForm('contact_service', 'contact_form', this);
}


// var audio = new Audio("../assets/6ix9ine-gooba.mp3");
// audio.play();

$(window).on("load", function () {
  $(".loader-wrapper").fadeOut("slow");
});