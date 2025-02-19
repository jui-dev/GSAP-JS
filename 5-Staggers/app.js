// staggers

gsap.set(".box", {
  borderRadius: 0,
});

gsap.to(".box", {
  borderRadius: 100,
  duration: 1,
  y: -100,
  ease: "power1",
  yoyo: true,
  repeat: -1,
  stagger: {
    amount: 4, // total amount of time in seconds.
    each: 0.5, // amount of time in seconds between each sub tweens start time.
    from: 0, // initial position from where stragger will eliminate.
  },
});
