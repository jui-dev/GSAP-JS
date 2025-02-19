let play = document.querySelector(".play");
let pause = document.querySelector(".pause");
let restart = document.querySelector(".restart");

let tween = gsap.to(".box1", {
  y: -200,
  duration: 5,
  backgroundColor: "teal",
});

play.addEventListener("click", () => tween.play()); // whenever the play button will be clicked the in built method of gsap play() method will be invoked.

pause.addEventListener("click", () => tween.pause()); // gsap in built method pause()

restart.addEventListener("click", () => tween.restart()); // gsap in built method restart()
