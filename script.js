
  AOS.init();
  
  $(document).ready(function(){
  $("#bar").click(function(){
    // alert('clicked')
    $(".navlinks").slideToggle();
  
  });
  });


function service(evt, servicedepartment) {
    var i, tabcontent, servicesicon;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    servicesicon = document.getElementsByClassName("servicesicon");
    for (i = 0; i < servicesicon.length; i++) {
        servicesicon[i].className = servicesicon[i].className.replace(" active", "");
    }
    document.getElementById(servicedepartment).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
