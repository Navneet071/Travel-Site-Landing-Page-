const scrollReveal = {
  distance: "50px",
  origin: "bottom",
  duration: 2000,
};

//header Content

ScrollReveal().reveal(".header__container h1", scrollReveal);

ScrollReveal().reveal(".header__container h4",{
  ...scrollReveal,
  delay:500,

});

ScrollReveal().reveal(".header__container button",{
  ...scrollReveal,
  delay:1000,

});


// about container
ScrollReveal().reveal(".about__container .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__container .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__container .about__flex", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__container .btn", {
  ...scrollRevealOption,
  delay: 1500,
});


// journals container
ScrollReveal().reveal(".journals__card", {
  ...scrollRevealOption,
  interval: 400,
});