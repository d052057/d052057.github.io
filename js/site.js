"use strict";
/**
 * load statement files to #statement section
 * this is the main javascript process loading pages when user click item in Nav bar.
 * @param {any} statement
 */
function loadStatement(statement) {
     $("#statement").hide();
     switch (statement) {
          case "home":
               $('#content').hide();
               $("#statement").load("home/homeStatement.html").fadeToggle(1000);
               break;
          case "about":
               $("#statement").load("about/aboutStatement.html").fadeToggle(1000);
               break;
          case "shade":
               $("#statement").load("shade/shadeStatement.html").fadeToggle(1000);
               break;
          case "form":
               $("#statement").load("bsform/bsformStatement.html").fadeToggle(1000);
               break;
          case "setup":
               $("#statement").load("setup/setupStatement.html").fadeToggle(1000);
               break;
          case "contact":
               $("#statement").load("contact/contactStatement.html").fadeToggle(1000);
               break;
          case "viewform":
               $("#statement").load("viewForm/viewFormStatement.html").fadeToggle(1000);
               break;
          case "lessonLearn":
               $("#statement").load("lessonLearn/lessonLearnStatement.html").fadeToggle(1000);
               break;
          case "other":
               $("#statement").load("other/otherStatement.html").fadeToggle(1000);
               break;
          case "cooking":
               $("#statement").load("videos/meeCola.html").fadeToggle(1000);
               break;
          case "carouselVideo":
               $("#statement").load("carouselVideo/index.html").fadeToggle(1000);
               break;
     }

};
/**
 * add event loading handler from index.html
 * */
function addEvents() {
     $('a .p-circle, #home').click(function () {
          loadStatement("home");
     });
     $('#shade').click(function () {
          loadStatement('shade');
          $('#content').hide('fast', function () {
               $('#content').load("shade/shade.html").fadeIn(1000);
          });
     });
     $('#form').click(function () {
          loadStatement('form');
          $('#content').hide('fast', function () {
               $('#content').load("bsform/bsform.html").fadeIn(1000);
          });
     });
     $('#setup').click(function () {
          loadStatement('setup');
          $('#content').hide('fast', function () {
               $('#content').load("setup/setup.html").fadeIn(1000);
          });
     });
     $('#contact').click(function () {
          loadStatement('contact');
          $('#content').hide('fast', function () {
               $('#content').load("contact/contact.html").fadeIn(1000);
          });
     });
     $('#viewForm').click(function () {
          loadStatement('viewform');
          $('#content').hide('fast', function () {
               $('#content').load("bsform/bsform.html", function (data) {
                    $("#btnDiv").remove();
                    $("#content").wrapInner("<div class='viewOnly'></div>");
               }).fadeIn(1000);
          });
     });
     $('#about').click(function () {
          loadStatement('about');
     });
     $('#lessonLearn').click(function () {
          loadStatement('lessonLearn');
     });

     $('#cooking').click(function () {
          loadStatement('cooking');
     });
     $('#carouselVideo').click(function () {
          loadStatement('carouselVideo');
     });

     $('#other').click(function () {
          loadStatement('other');
     });

     $('.btn-mon').click(function () {
          myColor.setColorByIndex = 1;
     });
     $('.btn-tue').click(function () {
          myColor.setColorByIndex = 2;
     });
     $('.btn-wed').click(function () {
          myColor.setColorByIndex = 3;
     });
     $('.btn-thu').click(function () {
          myColor.setColorByIndex = 4;
     });
     $('.btn-fri').click(function () {
          myColor.setColorByIndex = 5;
     });
     $('.btn-sat').click(function () {
          myColor.setColorByIndex = 6;
     });
     $('.btn-sun').click(function () {
          myColor.setColorByIndex = 0;
     });
};
/**
 * init and display day, date and month calendar
 * */
function setupCalendar() {
     const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     var _order = 'th';
     switch (new Date().getDate()) {
          case 1:
          case 11:
          case 21:
          case 31:
               _order = 'st';
               break;
          case 2:
          case 12:
          case 22:
               _order = 'nd';
               break;
          case 3:
          case 13:
               _order = 'rd';
               break;
     }

     $('#dayName').html(dayNames[new Date().getDay()]);
     $('#dayNumber').html(new Date().getDate() + "<sup>" + _order + "</sup>");
     $('#monthName').html(monthNames[new Date().getMonth()]);
};
// after dom loaded
$(document).ready(function () {
     setupCalendar();
     loadStatement("home");
     addEvents();
});

