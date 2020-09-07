const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  navMobile.classList.toggle("nav-mobile--active");
};

hamburger.addEventListener("click", handleClick);

/* Animations in Section HERO */

var heroH1 = new TimelineMax();
var heroSvg = new TimelineMax();
var heroSvg2 = new TimelineMax();
var nav = new TimelineMax();
var aboutUs = new TimelineMax();
var parallaxProduct = new TimelineMax();
var parallaxProduct2 = new TimelineMax();
var logos = new TimelineMax();
var productText = new TimelineMax();
var productText2 = new TimelineMax();
var parallaxMountain = new TimelineMax();
var featureBox = new TimelineMax();
var videoImg = new TimelineMax();
var videoScale = new TimelineMax();
var contactSpan = new TimelineMax();
var contactAnim = new TimelineMax();
var parallaxTitle = new TimelineMax();
var mobiletoiletImg = new TimelineMax();
var mobiletoiletAbout = new TimelineMax();
var mobiletoiletFeatures = new TimelineMax();
var mobiletoiletTwoinone = new TimelineMax();
var parallaxOpacity = new TimelineMax();
var awardsImg = new TimelineMax();
var awardsText = new TimelineMax();
var awardsParallax = new TimelineMax();
var aboutPageHeroImg = new TimelineMax();
var aboutPageSection1Img = new TimelineMax();
var aboutHeroText = new TimelineMax();
var aboutSection1Text = new TimelineMax();
var contactPageText = new TimelineMax();
var contactPageIcons = new TimelineMax();
var odorstopImg = new TimelineMax();
var odorstopText = new TimelineMax();
var odorstopSection2Text = new TimelineMax();
var odorstopSection4Text = new TimelineMax();
var odorstopSection3Text = new TimelineMax();
var agachemSpanText = new TimelineMax();
var mobiletoiletMoreImg = new TimelineMax();
var mobiletoiletGallery = new TimelineMax();
var mobiletoiletGallerySpan = new TimelineMax();
var aboutHeroCover = new TimelineMax();
const controller = new ScrollMagic.Controller();
var controller2 = new ScrollMagic.Controller({
  globalSceneOptions: { triggerHook: "onEnter", duration: "200%" },
});
var controller3 = new ScrollMagic.Controller({
  globalSceneOptions: { triggerHook: "50%", duration: "50%" },
});
var controller4 = new ScrollMagic.Controller({
  globalSceneOptions: { triggerHook: "onEnter", duration: "100%" },
});

heroH1
  .from("#hero-h1", 1, {
    opacity: 0,
    x: "-20px",
    ease: Power3.easeInOut,
  })
  .from(
    ".hero-title p",
    1,
    {
      opacity: 0,
      y: "20px",
      ease: Power3.easeInOut,
    },
    "-=0.5"
  )
  .from(
    "#mobiletoilet-hero-h1",
    1,
    {
      opacity: 0,
      y: "-40px",
      ease: Power3.easeInOut,
    },
    "-=1.5"
  )
  .from(
    "#mobiletoilet-subtitle",
    1,
    {
      opacity: 0,
      y: "40px",
      ease: Power3.easeInOut,
    },
    "-=1.8"
  );
heroSvg.to("#camper", 20, {
  x: "-100%",
});
heroSvg2.from("#camper", 1, {
  x: "100%",
  ease: Power4.easeInOut,
});

nav
  .to("nav", 0.5, {
    padding: "0% 3%",
    height: "80px",
    ease: Back.easeInOut,
  })
  .to(".logo", 0.2, { opacity: 1 })
  .to(".hamburger", 0.2, { opacity: 1 }, "-=0.2");

aboutUs
  .from("#about-us-p", 1, {
    opacity: 0,
    x: "-30px",
  })
  .from("#about-us-p span", 0.5, {
    opacity: 0,
  })
  .from("#about-us-img", 1, {
    opacity: 0,
    y: "-30px",
  });

parallaxProduct.fromTo(
  "#mobiletoilet-img",
  1,
  { y: "20%", rotation: 0, ease: Linear.easeNone },
  { y: "-20%", rotation: "8", ease: Linear.easeNone }
);
parallaxProduct2.fromTo(
  "#odor-stop-img",
  1,
  { y: "20%", rotation: 0, ease: Linear.easeNone },
  { y: "-20%", rotation: "-8", ease: Linear.easeNone }
);

logos.from(".logos-wrapper", 1, { x: "-50%" });

productText.fromTo(
  ".mobiletoilet-text",
  1,
  { y: "-20px", ease: Linear.easeNone },
  { y: "20px", ease: Linear.easeNone }
);
productText2.fromTo(
  ".odor-stop-text",
  1,
  { y: "-20px", ease: Linear.easeNone },
  { y: "20px", ease: Linear.easeNone }
);
parallaxMountain
  .from("#mountain1", 1, { y: "20%" })
  .from("#mountain2", 1, { y: "10%" }, "-=1");

featureBox
  .from("#feature-span", 1, { y: "-100%", ease: Power4.easeInOut })
  .from(
    ".feature2 #feature-span",
    1,
    { y: "-100%", ease: Power4.easeInOut },
    "-=0.8"
  )
  .from(
    ".feature3 #feature-span",
    1,
    { y: "-100%", ease: Power4.easeInOut },
    "-=0.8"
  )
  .from(
    ".feature4 #feature-span",
    1,
    { y: "-100%", ease: Power4.easeInOut },
    "-=0.8"
  );

videoImg.fromTo("#video-img", 1, { y: "30%" }, { y: "-10%" });
videoScale.from("#video", 1, { scale: "0.9", ease: Back.easeInOut });

contactSpan
  .from("#contact-span1", 1, { x: "-30%" })
  .from("#contact-span2", 1, { x: "50%" }, "-=1");

contactAnim
  .from("#contact-h3", 0.8, { opacity: 0, y: "20px", ease: Back.easeInOut })
  .from(
    ".contact-text-wrapper",
    0.8,
    { opacity: 0, x: "-20px", ease: Back.easeInOut },
    "-=0.5"
  )
  .from(
    ".googlemap-section",
    0.8,
    {
      opacity: 0,
      x: "30px",
      ease: Back.easeInOut,
    },
    "-=0.5"
  );

parallaxTitle
  .from("#parallax-h2", 0.5, { opacity: 0, x: "-30px" })
  .from("#parallax-h2-2", 0.5, { opacity: 0, x: "30px" }, "-=0.2")
  .from("#parallax-p", 0.5, { opacity: 0, y: "30px" }, "-=0.2");

mobiletoiletImg.fromTo(
  "#mobiletoilet-features-img",
  1,
  { y: "50px" },
  { y: "-50px" }
);
mobiletoiletAbout
  .from("#mobiletoilet-about-subtitle", 0.5, {
    y: "-30px",
    opacity: 0,
  })
  .from("#mobiletoilet-about-h2", 0.5, { y: "30px", opacity: 0 }, "-=0.2")
  .from("#mobiletoilet-about-p", 0.5, { x: "50px", opacity: 0 }, "-=0.2");

mobiletoiletFeatures
  .from("#mobiletoilet-features-h3", 0.5, {
    y: "-30px",
    opacity: 0,
  })
  .staggerFrom(
    ".mobiletoilet-features-p",
    0.5,
    { x: "-30px", opacity: 0, stagger: "0.2" },
    "-=0.2"
  );

mobiletoiletTwoinone
  .from("#twoinone-toiletseat-1", 1, { opacity: 0 })
  .from("#twoinone-p-1", 1, { opacity: 0 }, "-=1")
  .from("#twoinone-toiletseat-2", 1, { opacity: 0 })
  .from("#twoinone-p-2", 1, { opacity: 0 }, "-=1")
  .from("#twoinone-toiletseat-3", 1, { opacity: 0 })
  .from("#twoinone-p-3", 1, { opacity: 0 }, "-=1");

parallaxOpacity.fromTo(
  ".mobiletoilet-parallax-overlay",
  1,
  { opacity: 0 },
  { opacity: 1 }
);
awardsImg.fromTo(".awards-img", 1, { y: "10%" }, { y: "-20%" });
awardsText
  .from("#awards-h3", 0.5, { opacity: 0, y: "30px" })
  .from("#awards-h2", 0.5, { opacity: 0, y: "-30px" }, "-=0.2")
  .from("#awards-p", 0.5, { opacity: 0, x: "30px" }, "-=0.2");

aboutPageHeroImg.fromTo(".about-hero-image2", 1, { y: "0" }, { y: "-40%" });
aboutPageSection1Img.fromTo(
  ".about-page-section1-image2",
  1,
  { y: "0" },
  { y: "-40%" }
);

aboutHeroText
  .from("#about-hero-h3", 0.5, {
    y: "-30px",
    opacity: 0,
  })
  .from("#about-hero-h1", 0.5, { y: "30px", opacity: 0 }, "-=0.2")
  .from("#about-hero-p", 0.5, { x: "50px", opacity: 0 }, "-=0.2");

aboutSection1Text
  .from(".about-page-section1-text > #about-hero-h3", 0.5, {
    y: "-30px",
    opacity: 0,
  })
  .from("#about-hero-section-h1", 0.5, { y: "30px", opacity: 0 }, "-=0.2")
  .from("#about-hero-section-p", 0.5, { x: "50px", opacity: 0 }, "-=0.2");

contactPageText.from("#contact-page-section1-h3", 0.5, {
  y: "-30px",
  opacity: 0,
});

contactPageIcons.staggerFrom(
  ".contact-page-section1-address",
  0.5,
  { y: "-30px", opacity: 0, stagger: "0.2" },
  "-=0.2"
);

odorstopSection2Text
  .from("#odorstop-section2-p", 0.5, {
    y: "100%",
  })
  .from(
    ".odorstop-section2-row2 #odorstop-section2-p",
    0.5,
    {
      y: "100%",
    },
    "-=0.2"
  )
  .from(
    ".odorstop-section2-row3 #odorstop-section2-p",
    0.5,
    {
      y: "100%",
    },
    "-=0.2"
  )
  .from(
    ".odorstop-section2-row4 #odorstop-section2-p",
    0.5,
    {
      y: "100%",
    },
    "-=0.2"
  );

odorstopImg.fromTo("#odorstop-section1-img", 1, { y: "50px" }, { y: "-50px" });

odorstopText
  .from("#odorstop-section1-span-h3", 0.5, {
    y: "100%",
    ease: Power2.easeInOut,
  })
  .from(
    "#odorstop-section1-span-h1",
    0.5,
    {
      y: "100%",
      ease: Power2.easeInOut,
    },
    "-=0.1"
  );

odorstopSection4Text.from("#odorstop-section4-p", 0.5, {
  y: "50px",
  opacity: 0,
  ease: Power2.easeInOut,
});

odorstopSection3Text
  .from("#odorstop-section3-h3", 0.5, {
    y: "-50px",
    opacity: 0,
    ease: Power2.easeInOut,
  })
  .from(
    "#odorstop-section3-h2",
    0.5,
    {
      y: "-50px",
      opacity: 0,
      ease: Power2.easeInOut,
    },
    "-=0.2"
  )
  .from(
    "#odorstop-section3-p",
    0.5,
    {
      x: "-50px",
      opacity: 0,
      ease: Power2.easeInOut,
    },
    "-=0.2"
  );

mobiletoiletGallery
  .to("#mobiletoilet-gallery-span", 1, {
    y: "100%",
    ease: Power2.easeInOut,
  })
  .to(
    ".mobiletoilet-gallery-image:nth-child(2) > #mobiletoilet-gallery-span",
    1,
    {
      y: "100%",
      ease: Power2.easeInOut,
    },
    "-=0.8"
  )
  .to(
    ".mobiletoilet-gallery-image:nth-child(3) > #mobiletoilet-gallery-span",
    1,
    {
      y: "100%",
      ease: Power2.easeInOut,
    },
    "-=0.8"
  )
  .to(
    ".mobiletoilet-gallery-image:nth-child(4) > #mobiletoilet-gallery-span",
    1,
    {
      y: "100%",
      ease: Power2.easeInOut,
    },
    "-=0.8"
  );

agachemSpanText.to("#agachem-span-text", 0.1, { x: "-40%" });
mobiletoiletMoreImg.to(".mobiletoilet-section5-img", 0.1, { y: "-100px" });
mobiletoiletGallerySpan.from("#mobiletoilet-gallery-p-span", 1, {
  x: "-100vw",
  ease: Power2.easeInOut,
});

aboutHeroCover.to(
  "#about-hero-cover",
  1,
  {
    x: "100%",
    ease: Power4.easeInOut,
  },
  "+1"
);

const scene = new ScrollMagic.Scene({
  triggerElement: "onEnter",
})
  .setTween(heroH1)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "nav",
  triggerHook: 0,
  duration: "100%",
})
  .setTween(heroSvg)
  .addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: ".hero-title",
  triggerHook: 0,
})
  .setTween(nav)
  .addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: ".about-us",
  triggerHook: 0.75,
})
  .setTween(aboutUs)
  .addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: ".product-section",
  triggerHook: 0.5,
  duration: "100%",
})
  .setTween(parallaxProduct)
  .addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: ".odor-stop",
  triggerHook: 0.5,
  duration: "100%",
})
  .setTween(parallaxProduct2)
  .addTo(controller);

const scene7 = new ScrollMagic.Scene({
  triggerElement: ".about-us",
  triggerHook: 0.25,
  duration: "70%",
})
  .setTween(logos)
  .addTo(controller);

const scene8 = new ScrollMagic.Scene({
  triggerElement: ".product-section",
  triggerHook: 0.5,
  duration: "90%",
})
  .setTween(productText)
  .addTo(controller);

const scene9 = new ScrollMagic.Scene({
  triggerElement: ".odor-stop",
  triggerHook: 0.5,
  duration: "90%",
})
  .setTween(productText2)
  .addTo(controller);

const scene10 = new ScrollMagic.Scene({
  triggerElement: ".parallax-mountains",
  triggerHook: 0.5,
  duration: "100%",
})
  .setTween(parallaxMountain)
  .addTo(controller);

const scene11 = new ScrollMagic.Scene({
  triggerElement: ".features-section",
  triggerHook: 0.5,
})
  .setTween(featureBox)
  .addTo(controller);

const scene12 = new ScrollMagic.Scene({
  triggerElement: ".agachem-video",
  triggerHook: 0.5,
  duration: "100%",
})
  .setTween(videoImg)
  .addTo(controller);

const scene13 = new ScrollMagic.Scene({
  triggerElement: ".agachem-video",
  triggerHook: 0.5,
})
  .setTween(videoScale)
  .addTo(controller);

const scene14 = new ScrollMagic.Scene({
  triggerElement: ".contact-section",
  triggerHook: 0.5,
  duration: "100%",
})
  .setTween(contactSpan)
  .addTo(controller);

const scene15 = new ScrollMagic.Scene({
  triggerElement: ".contact-text",
  triggerHook: 0.75,
})
  .setTween(contactAnim)
  .addTo(controller);

const scene16 = new ScrollMagic.Scene({
  triggerElement: ".parallax-title",
  triggerHook: 0.75,
})
  .setTween(parallaxTitle)
  .addTo(controller);

const scene17 = new ScrollMagic.Scene({
  triggerElement: ".mobiletoilet-features-section",
  triggerHook: 0.5,
  duration: "100%",
})

  .setTween(mobiletoiletImg)
  .addTo(controller);

const scene18 = new ScrollMagic.Scene({
  triggerElement: ".mobiletoilet-about-text",
  triggerHook: 0.75,
})
  .setTween(mobiletoiletAbout)
  .addTo(controller);

const scene19 = new ScrollMagic.Scene({
  triggerElement: ".mobiletoilet-features-section",
  triggerHook: 0.75,
})
  .setTween(mobiletoiletFeatures)
  .addTo(controller);

const scene20 = new ScrollMagic.Scene({
  triggerElement: ".mobiletoilet-twoinone-section",
  triggerHook: 0,
  duration: "100%",
})
  .setPin(".mobiletoilet-twoinone-section")
  .setTween(mobiletoiletTwoinone)
  .addTo(controller);

const scene21 = new ScrollMagic.Scene({
  triggerElement: ".mobiletoilet-parallax",
  triggerHook: 0.5,
  duration: "300px",
})
  .setTween(parallaxOpacity)
  .addTo(controller);

const scene22 = new ScrollMagic.Scene({
  triggerElement: ".awards-section",
  triggerHook: 0.5,
  duration: "100%",
})
  .setTween(awardsImg)
  .addTo(controller);

const scene23 = new ScrollMagic.Scene({
  triggerElement: ".awards-wrapper",
  triggerHook: 0.75,
})
  .setTween(awardsText)
  .addTo(controller);

const scene24 = new ScrollMagic.Scene({
  triggerElement: ".about-hero-imgs",
  triggerHook: 0.5,
  duration: "100%",
})
  .setTween(aboutPageHeroImg)
  .addTo(controller);

const scene25 = new ScrollMagic.Scene({
  triggerElement: ".about-page-section1-imgs",
  triggerHook: 0.75,
  duration: "100%",
})
  .setTween(aboutPageSection1Img)
  .addTo(controller);

const scene26 = new ScrollMagic.Scene({
  triggerElement: ".about-page-section1-text",
  triggerHook: 0.75,
})
  .setTween(aboutSection1Text)
  .addTo(controller);

const scene27 = new ScrollMagic.Scene({
  triggerElement: ".contact-page-section1",
  triggerHook: 0.75,
})
  .setTween(contactPageText)
  .addTo(controller);
const scene28 = new ScrollMagic.Scene({
  triggerElement: ".contact-page-section1-icons",
  triggerHook: 0.75,
})
  .setTween(contactPageIcons)
  .addTo(controller);

const scene29 = new ScrollMagic.Scene({
  triggerElement: ".odorstop-section1-img",
  triggerHook: 0.5,
  duration: "100%",
})
  .setTween(odorstopImg)
  .addTo(controller);
const scene30 = new ScrollMagic.Scene({
  triggerElement: ".odorstop-section1",
  triggerHook: 0.5,
})
  .setTween(odorstopText)
  .addTo(controller);

const scene31 = new ScrollMagic.Scene({
  triggerElement: ".odorstop-section2",
  triggerHook: 0.5,
})
  .setTween(odorstopSection2Text)
  .addTo(controller);

const scene32 = new ScrollMagic.Scene({
  triggerElement: ".odorstop-section4-text",
  triggerHook: 0.75,
})
  .setTween(odorstopSection4Text)
  .addTo(controller);
const scene33 = new ScrollMagic.Scene({
  triggerElement: ".odorstop-section3-text",
  triggerHook: 0.75,
})
  .setTween(odorstopSection3Text)
  .addTo(controller);

const scene34 = new ScrollMagic.Scene({
  triggerElement: "#agachem-span-text",
  triggerHook: 0.75,
  duration: "100%",
})
  .setTween(agachemSpanText)
  .addTo(controller);

const scene35 = new ScrollMagic.Scene({
  triggerElement: ".mobiletoilet-section5-container",
  triggerHook: 0.75,
  duration: "100%",
})
  .setTween(mobiletoiletMoreImg)
  .addTo(controller);

const scene36 = new ScrollMagic.Scene({
  triggerElement: ".mobiletoilet-gallery-container",
  triggerHook: 0.5,
})
  .setTween(mobiletoiletGallery)
  .addTo(controller);
const scene37 = new ScrollMagic.Scene({
  triggerElement: ".mobiletoilet-gallery-text",
  triggerHook: 0.75,
})
  .setTween(mobiletoiletGallerySpan)
  .addTo(controller);

const scene38 = new ScrollMagic.Scene({
  triggerElement: ".about-hero",
  triggerHook: 1,
})
  .setTween(aboutHeroCover)
  .addTo(controller);

var pinNav = new ScrollMagic.Scene({
  triggerElement: "nav",
  triggerHook: 0,
})
  .setPin("nav", { pushFollowers: false })
  .addTo(controller);
/*
  const cursor = document.querySelector(".cursor");
  document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + e.pageY + "px; left: " + e.pageX + "px;"
  );
  });
  */

/* PARALLAX */
new ScrollMagic.Scene({ triggerElement: ".parallax-section" })
  .setTween(".parallax-img", { y: "80%", ease: Linear.easeNone })
  .addTo(controller2);

new ScrollMagic.Scene({ triggerElement: ".parallax-section" })
  .setTween(".parallax-overlay", { opacity: "0.3", ease: Linear.easeNone })
  .addTo(controller3);

new ScrollMagic.Scene({ triggerElement: ".image-gallery" })
  .setTween("#image1, #image2, #image3, #image4, #image5", {
    y: "-20%",
    ease: Linear.easeNone,
  })
  .addTo(controller2);

new ScrollMagic.Scene({ triggerElement: ".awards-section" })
  .setTween(".awards-parallax-img", {
    y: "30%",
    ease: Linear.easeNone,
  })
  .addTo(controller2);

new ScrollMagic.Scene({ triggerElement: ".mobiletoilet-parallax" })
  .setTween(".mobiletoilet-parallax-img", { y: "50%", ease: Linear.easeNone })
  .addTo(controller2);

new ScrollMagic.Scene({ triggerElement: ".contact-page-hero" })
  .setTween(".contact-page-hero-background", {
    y: "50%",
    ease: Linear.easeNone,
  })
  .addTo(controller2);
new ScrollMagic.Scene({ triggerElement: ".odorstop-section4" })
  .setTween(".odorstop-section4-background", {
    y: "50%",
    ease: Linear.easeNone,
  })
  .addTo(controller2);

new ScrollMagic.Scene({ triggerElement: ".odorstop-section3" })
  .setTween("#odorstop-section3-img", {
    scale: 1,
    ease: Linear.easeNone,
  })
  .addTo(controller4);

new ScrollMagic.Scene({ triggerElement: ".about-hero" })
  .setTween(".about-hero-background-wrapper", {
    y: "20%",
    ease: Linear.easeNone,
  })
  .addTo(controller2);
/*SWIPER*/
