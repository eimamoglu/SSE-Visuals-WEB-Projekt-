gsap.registerPlugin(ScrollTrigger);

    gsap.from("#heroTitle", {
      y: -100,
      opacity: 0,
      duration: 1.5,
      ease: "power4.out"
    });

    gsap.from("#heroSub", {
      y: 100,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "power2.out"
    });

    gsap.from("#mainHeadline", {
      scrollTrigger: "#mainHeadline",
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from("#mainText", {
      scrollTrigger: "#mainText",
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.2
    });

    gsap.from(["#card1", "#card2", "#card3"], {
      scrollTrigger: {
        trigger: "#card1",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
      ease: "power2.out"
    });

    gsap.utils.toArray(".parallax-container .section-image").forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top 90%",
        },
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out"
      });
});