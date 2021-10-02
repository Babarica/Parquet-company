$(function(){

   let filter = $("[data-filter]");

   filter.on("click", function(event) {
       event.preventDefault();

       let cat = $(this).data('filter');

       $("[data-cat]").each(function(){

           let workCat= $(this).data('cat');

           if (workCat != cat) {
               $(this).addClass('hide');
           } else {
            $(this).removeClass('hide');
           }
       });
   });
});
$(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
    });
});
$(function(){
    $('.review-slider').slick();
});
$(function(){
    $('.popup-slider').slick({
        slidesToShow: 1,
        dots: true,
    });
});
$(function(){
    $('.header-inner__burger').on('click', function(){
        $('.header-inner__nav').toggleClass('active');
        $('.header-inner__burger').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
