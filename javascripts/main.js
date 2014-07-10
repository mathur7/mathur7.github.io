$(document).ready(function(){

  // animationHover('#icon1', 'pulse');

  $('#icon1').hover(function(){
    animationHover('#icon1', 'tada');
  });

  $('#icon2').hover(function(){
    animationHover('#icon2', 'tada');
  });

  $('#icon3').hover(function(){
    animationHover('#icon3', 'tada');
  });

  $('#icon4').hover(function(){
    animationHover('#icon4', 'tada');
  });

  $('#icon5').hover(function(){
    animationHover('#icon5', 'tada');
  });

  $('#website1').hover(function(){
    animationHover('#website1', 'pulse');
  });

  $('#website2').hover(function(){
    animationHover('#website2', 'pulse');
  });

  $('#website3').hover(function(){
    animationHover('#website3', 'pulse');
  });

 function animationHover(element, animation){
    var element = $(element);
      element.addClass('animated ' + animation);
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
          element.removeClass('animated ' + animation);
      }, 3000); 
  }

});