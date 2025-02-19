gsap.set(".box", {
  opacity: 0, //currently can not see the div as opacity is set to 0.
  background: "yellow",
});

gsap.to(".box", {
  opacity: 1, // now we can see the div as the opacity is set to 1.
  background: "crimson",
  duration: 3, // it will take 3 sec to add the crimson color.
  y: 100,
  repeat: -1, // it will repeat infinite time.
  yoyo: true, //it will keep moving from bottom to top.
});
