


$( ".0" ).on( "click", function() {
   $( ".info-detail" ).slideToggle( "slow" ); 
      if ($(".0").hasClass("active")) {
        $(".0").html("More Info").removeClass("active")
      } else {
        $(".0").html("Less Info").addClass("active")
      }  
 });
 

 $( ".1" ).on( "click", function() {
   $( ".info-detail1" ).slideToggle( "slow" );
     if ($(".1").hasClass("active")) {
      $(".1").html("More Info").removeClass("active")
    } else {
      $(".1").html("Less Info").addClass("active")
  }
 });


 $( ".2" ).on( "click", function() {
   $( ".info-detail2" ).slideToggle( "slow" );
   if ($(".2").hasClass("active")) {
    $(".2").html("More Info").removeClass("active")
  } else {
    $(".2").html("Less Info").addClass("active")
  }
 }); 


 function onFormSumbit(e) {
  e.preventDefault()
  const email = $("#inp_email")
  const subject = $("#inp_subject")
  const message = $("#inp_message")

   if (!$(email).val()) {
    alert("Email is required")
   } else if (!$(subject).val()) {
      alert("Subject is required")
     } else if (!$(message).val()) {
      alert("Message is required")
     } else {
      alert ("Form Sumbitted")
      $(email).val("")
      $(subject).val("")
      $(message).val("")
    }
  }
  
