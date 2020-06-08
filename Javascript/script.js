$(document).ready(function() {
  // Initialize fullpage.js
  /*var autoScroll = true;*/
 // if (window.innerWidth > 900) {
  
  $('#fp-wrapper').fullpage({
    sectionsColor: ['#1c253c','#1f3e5a','#020a16','#281c3c','#1c253c'],
    anchors: ['home', 'about', 'events', 'sponser', 'contact'],
    fixedElements: '.navbar-fixed-top',
    menu: '#myNavbar',
    loopTop: false,

    //scrollOverflow: true,
    //normalScrollElements: '#section1',
    // responsiveWidth: 950,
    //scrollBar: true,
    //autoScrolling: autoScroll,
    });
  /*
  if (window.innerWidth < 800) {
    $.fn.fullpage.setAutoScrolling(false);
  }*/
    
});