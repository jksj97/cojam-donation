$( document ).ready(function() {
    $('.js-click-modal').click(function(){
        $('.modal-container').addClass('modal-open');
      });
      
      $('.js-close-modal').click(function(){
        $('.modal-container').removeClass('modal-open');
      });


      //pay modal
      $(".pay-box").click(function(){
        $(".modal").fadeIn();
      });
      
      $(".close-modal").click(function(){
        $(".modal").fadeOut();
      });
});