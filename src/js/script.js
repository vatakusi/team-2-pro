const swiper = new Swiper('.swiper', {
  // Optional parameters
   effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },

  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type:'bullets',
    clickable: 'true',
  },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  spaceBetween:20,
});