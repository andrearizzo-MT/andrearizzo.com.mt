//HAMBURGER MENU
function burgerFunction() {
    var x = document.getElementById("navibarBurger");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

//ANDREA RIZZO NAME BAFFLE MATRIX STYLE
    var b = window.baffle('h1',
      {
        characters: '▓░█ ▒░▒▓░ ▒░░▓> ▒█▓ █░><▒ █▒█▓ ▓░/ ▓▓/█ █▓▒▓░█ ▒░▒▓░ ▒░░▓> ▒█▓ █░><▒ █▒█▓ ▓░/ ▓▓/█ █▓▒ AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?',
        speed: 70
    });
    b.start().once().reveal(1500, 1500);

//TEXT TYPING TRANSITIONS
document.addEventListener("DOMContentLoaded", function(){
  Typed.new(".typedElement", {
      strings: ["Arch Draftsman","CAD Designer","Programmer", "Web Developer"],
      // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
      stringsElement: null,
      // typing speed
      typeSpeed: 50,
      // time before typing starts
      startDelay: 2800,
      // backspacing speed
      backSpeed: 0,
      // shuffle the strings
      shuffle: false,
      // time before backspacing
      backDelay: 1200,
      // Fade out instead of backspace (must use CSS class)
      fadeOut: false,
      fadeOutClass: 'typed-fade-out',
      fadeOutDelay: 500, // milliseconds
      // loop
      loop: true,
      // null = infinite
      loopCount: null,
      // show cursor
      showCursor: true,
      // character for cursor
      cursorChar: " " + '<i class="fa fa-terminal w3-xxlarge w3-text-yellow"></i>',
      // attribute to type (null == text)
      attr: null,
      // either html or text
      contentType: 'html',
      // call when done callback function
      callback: function() {},
      // starting callback function before each string
      preStringTyped: function() {},
      //callback for every typed string
      onStringTyped: function() {},
      // callback for reset
      resetCallback: function() {}
      });
	});

//SCROLLING TRANSITIONS
//NAVIGATION
$(navibar).find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").delay(300).animate({scrollTop: $(section).offset().top - 50},{duration:2500});
});

//MOBILE NAVIGATION
$(navibarBurger).find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").delay(300).animate({scrollTop: $(section).offset().top - 50},{duration:2500});
});

//ARROW GET STARTED
$(showcase).find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").delay(300).animate({scrollTop: $(section).offset().top - 50},{duration:2500});
});


//ACCORDIONS
function accFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("w3-show") == -1) {
        x.className += "w3-show";
    } else {
        x.className = x.className.replace("w3-show", "");
    }
}

//CONTACT FORM VALIDATIONS
function validateEmailForm(form) {

    //FIRST NAME
    if(form.first.value == "") {
      // alert("Error: Input is empty!");
      form.first.setCustomValidity('Please enter your first name');
      form.first.focus();
      return false;
    }

    //LAST NAME
    if(form.last.value == "") {
      form.last.setCustomValidity('Please enter your last name');
      form.last.focus();
      return false;
    }

    //E-MAIL
    var e = form._replyto.value;
    var atpos = e.indexOf("@");
    var dotpos = e.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length) {
        form._replyto.setCustomValidity('Please use a valid e-mail address');
        form._replyto.focus();
        return false;
    }

    //PHONE
    var ph = form.phone.value;
    var phNum = ph.replace(/[^\d]/g, '');
    if(ph == ""){
      form.phone.setCustomValidity('Please enter your phone number');
      form.phone.focus();
      return false;
    }

    if(phNum.length < 8 || phNum.length > 15) {
      form.phone.setCustomValidity('Please enter a valid phone number');
      form.phone.focus();
      return false;
    }

    //MESSAGE
    if(form.message.value == "") {
      form.message.setCustomValidity('Please enter your message');
      form.message.focus();
      return false;
    }

    //VALIDATION SUCCESSFUL
    return true;
}

// //HTML5 GET COORDINATES
// var x = document.getElementById("locationCoords");
//
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
//
// function showPosition(position) {
//     x.innerHTML = '<i class="fa fa-spin fa-compass w3-large"></i>' + " Lat: " + position.coords.latitude + " Lon: " + position.coords.longitude + " " + '<i class="fa fa-spin fa-compass w3-large"></i>';
// }
//
// function showError(error) {
//     switch(error.code) {
//         case error.PERMISSION_DENIED:
//             x.innerHTML = "Geolocation Denied by User"
//             break;
//         case error.POSITION_UNAVAILABLE:
//             x.innerHTML = "Location information is unavailable"
//             break;
//         case error.TIMEOUT:
//             x.innerHTML = "The request to get user location timed out"
//             break;
//         case error.UNKNOWN_ERROR:
//             x.innerHTML = "An unknown error occurred"
//             break;
//     }
// }

//ip-api.com API & OPENWEATHERMAP API
function getLocation(){

  //ip-api.com API SCHEMA
  var urlLocAPI = "http://ip-api.com/json"
  //GET LOCATION
  $.ajax({
    type: 'GET',
    url: urlLocAPI,
    success: function(locData){
      console.log('success',locData);

      //OPENWEATHERMAP API SCHEMA
      var urlWeathAPI = "http://api.openweathermap.org/data/2.5/weather?lat=" + locData.lat + "&lon=" + locData.lon + "&units=metric&appid=c1863e048e4deb9e8e2c478b89159dde"
      //GET WEATHER
      $.ajax({
        type: 'GET',
        url: urlWeathAPI,
        success: function(weathData){
          console.log('success',weathData);

          //DISPLAY JSON data
          //IP ADDRESS HIDDEN IN CONTACT FORM
          document.forms["emailForm"]["ip"].value = locData.query;

          //FOOTER WEATHER CONDITIONS
          locationAndWeath.innerHTML = '<span class="w3-text-green w3-large">IP: </span>' + locData.query + '<span> &nbsp </span>'
          // + '<i class="fa fa-location-arrow w3-large w3-text-green">&nbsp</i>' + " " + locData.city + " - "  + locData.countryCode + '<span> &nbsp </span>'
          + '<span class="w3-text-green w3-large">CONDITIONS: </span>'
          + '<i class="wi wi-barometer w3-text-red w3-xlarge">&nbsp</i>' + weathData.main.pressure + " hPa" + '<span> &nbsp </span>'
          + '<i class="wi wi-humidity w3-text-red w3-xlarge">&nbsp</i>' + weathData.main.humidity + " %" + '<span> &nbsp </span>'
          + '<i class="wi wi-strong-wind w3-text-red w3-xlarge">&nbsp</i>' + weathData.wind.speed + " m/s" + '<span> &nbsp </span>'
          + '<i class="wi wi-thermometer w3-text-red w3-xlarge">&nbsp</i>' + weathData.main.temp + '<i class="wi wi-celsius w3-text-red w3-xlarge"></i>' + '<span> &nbsp </span>'
          + '<img src="http://openweathermap.org/img/w/' + weathData.weather[0].icon + '.png" style="width: 40px; height: 40px;">&nbsp';
        }
      })
    }
  })
}
