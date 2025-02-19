//gsap.method(element, vars obj); // this gsap object is the key point of all of the gsap words. this is the heart of gsap.

gsap.to(".box", {
  // .to() method is the most common type of animation in gsap. this method allow you to define destination object.
  //x: 100, // transform to the x axis.
  y: 200,
  duration: 2, // the box div will take 2 sec of duration to move on the x axis.
  //repeat: -1, // this animation will repeat again and again infinite time.
  repeat: 2, // the animation will repeat only 2 times.
});
