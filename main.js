// function ToggleDetail(e) {
//    const target = $(e.target)
//    const item = $(target).parents(".about-exp-item")
//    const detail = $(item).children(".about-exp-detail")
   
//    $(detail).slideToggle()
// }


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

  
