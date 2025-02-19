//From and FromTo method in GSAP

// from: in from method we don't have to specify the initial state. (it will figure out by itself)

//fromTo: in fromTo method we have to specify the default value and also the new animation state as well.

/*
gsap.from(".box1", {
  // here we dont have to specify the initial state.
  y: -200,
  duration: 3,
  ease: "linear",
  repeat: -1,
  yoyo: true,
});
*/

gsap.fromTo(
  ".box2",
  {
    // initial state
    y: 200,
    opacity: 0,
  },
  {
    opacity: 1,
    y: -200,
    duration: 3,
    ease: "linear",
    borderRadius: 0,
    repeat: -1,
  }
);
